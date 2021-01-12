'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/alimentos', 'AlimentoController.guardar')
Route.post('/alimentos/:id', 'AlimentoController.actualizar').middleware('exist')
Route.delete('/alimentos/:id', 'AlimentoController.borrar').middleware('exist')
Route.get('/alimentos/:id?', 'AlimentoController.index')


Route.on('/').render('welcome')
