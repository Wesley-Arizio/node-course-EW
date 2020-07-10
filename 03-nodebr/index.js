// Async Await

const { promisify } = require('util');

const getUser = () => {
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

const  main = async () => {
    try{
        const user  = await getUser();

        const response = await Promise.all([
            getPhone(user.id),
            getAdressAsync(user.id)
        ]);

        const data = {
            phone: response[0],
            adress: response[1]
        };

        console.time("Medida Promise")
        console.log(`
            id:     ${user.id},
            Nome:   ${user.name},
            Phone: (${data.phone.ddd}) ${data.phone.phone},
            Adress: ${data.adress.street}, ${data.adress.number}

        `)
        console.timeEnd("Medida Promise")

    }catch(error){
        console.error("Error on executing main Function: ", error);
    }
}
main()