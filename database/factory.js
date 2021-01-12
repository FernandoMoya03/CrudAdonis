'use strict'
const Factory = require('@adonisjs/lucid/src/Factory')
/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

Factory.blueprint('App/Models/Alimento', (faker) => {
    return{
        NombreAlimento: faker.word(),
        Cantidad: faker.integer({ min: 0, max: 100 })
    }
})