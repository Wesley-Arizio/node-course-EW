
// Using callback to make asynchronous function.


// When the getUser function is finished, you must pass two parameters for callback (error and response).


const getUser = (callback) => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: 'Relampago Marquinhos',
            birthday: new Date()
        });
    }, 1000);
}

const getPhone = (id, callback) => {
    setTimeout(() => {
        return callback(null, {
            phone: '988085206',
            ddd: '48'
        });
    }, 2000);
}

const getAdress = (id, callback) => {
    setTimeout(() => {
        return callback(null, {
            street: 'Nova Era',
            number: '48'
        })
    }, 3000);
}

getUser((errorUser, user) => {

    if(errorUser){
        console.error('Error on getting USER: ', errorUser);
        return;
    }

    getPhone(user.id, (errorPhone, phone) => {
        if(errorPhone){
            console.error('Error on getting Phone: ', errorPhone);
            return;
        }

        getAdress(user.id, (errorAdress, adress) => {
            if(errorAdress){
                console.error('Error on getting Adress: ', errorAdress);
                return;
            }

            console.log(`
                Name: ${user.name},
                Endereço: ${adress.street}, ${adress.number},
                Phone: (${phone.ddd})${phone.phone} 
            `);

        });
    });

});