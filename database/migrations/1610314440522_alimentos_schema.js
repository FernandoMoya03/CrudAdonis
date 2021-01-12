'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlimentosSchema extends Schema {
  up () {
    this.create('alimentos', (table) => {
        table.increments()
        table.string('NombreAlimento', 80).notNullable().unique()
        table.string('Cantidad', 254).notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('alimentos')
  }
}

module.exports = AlimentosSchema
