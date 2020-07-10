// Using promise

const { promisify } = require('util');
// Promisify converts callback to promise

const getUser = () => {
    // resolve => sucesso
    // reject => erro
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: 'Relampago Marquinhos',
                birthday: new Date()
            });
        }, 1000);
    });
}

const getPhone = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                phone: '988085206',
                ddd: '48'
            });
        }, 2000);
    });
}

const getAdress = (id, callback) => {
    setTimeout(() => {
        return callback(null, {
            street: 'Nova Era',
            number: '219'
        })
    }, 3000);
}

const getAdressAsync = promisify(getAdress);

// success => .then
// error: => .catch

const user = getUser();

user.then( user => {
        return getPhone( user.id )
            .then( phone => {
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    phone: phone
                }
            });
    })
    .then( data => {
        return getAdressAsync( data.user.id)
            .then( adress => {
                return {
                    user: data.user,
                    phone: data.phone,
                    adress: adress
                }
            });
    })
    .then( response => {
        console.log(`
            Name:   ${response.user.name},
            Adress: ${response.adress.street}, ${response.adress.number},
            Phone: (${response.phone.ddd}) ${response.phone.phone}
        `);
    })
    .catch(error => {
        console.error("Error on getting User function: ", error);
    });