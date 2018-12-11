
exports.up = function (knex, Promise) {
    return knex('users')    
    .insert({name: 'Rene Estevam Deckers',
             email: 'primodeckers@hotmail.com',
             password: '$2a$10$pAOGNfcEhhamMxTTD/7y7.gA3DmrSqFwif8.V/OZhejYw8EGr7uOy',
             admin: true })
    

};

exports.down = function (knex, Promise) {
    return knex('users').del()
    };




