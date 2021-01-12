'use strict'
const Alimento = use('App/Models/Alimento')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Equi {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, params: {id} }, next) {
    const Ali = await Alimento.find(id)
    if(Ali)
    {
       await next()
    }else
    {
        response.status(404).json({
          message: 'el alimento no se encuentra!!'
    })
    
  }
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({ params: {id}, response }, next) {
    const Ali = await Alimento.find(id)
    if(Ali)
    {
       await next()
    }else
    {
        response.status(404).json({
          message: 'el alimento no se encuentra!!'
    })   
  }
  }
}

module.exports = Equi
