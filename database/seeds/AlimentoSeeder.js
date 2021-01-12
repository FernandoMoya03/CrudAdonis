'use strict'

/*
|--------------------------------------------------------------------------
| AlimentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AlimentoSeeder {
  async run () {
    const Alimento = await Factory.model('App/Models/Alimento').createMany(5)
    console.log(Alimento)
  }
}

module.exports = AlimentoSeeder
