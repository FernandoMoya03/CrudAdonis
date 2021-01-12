'use strict'
const Alimento = use('App/Models/Alimento')
const { validate } = use('Validator')

class AlimentoController {
    async index({response, params}){
        const {id} = params
        const oki = await Alimento.all()

        if(id)
        {
            const Alime = await Alimento.find(id)
            return response.json(Alime)
        }else{
            response.json({
                message: 'Estos son los alimentos existentes',
                data: oki 
            })
        }
        
    }
 
    async guardar({request, response, session, params: {id}}){
        const validation = await validate(request.all(), {
            NombreAlimento: 'required',
            Cantidad: 'required'
        })
        if (validation.fails()) {
            session
            return validation.messages()
          }
        const oki = new Alimento()
        const { NombreAlimento, Cantidad} = request.post()
        oki.NombreAlimento = NombreAlimento
        oki.Cantidad = Cantidad
        await oki.save()
        response.json({
            message: 'Se ha agregado un nuevo objeto',
            data: oki 
        })
    }

    async actualizar({request, response, params: {id}}){
        const Ali = await Alimento.find(id)
        
            const {NombreAlimento, Cantidad} = request.post()   

            Ali.NombreAlimento = NombreAlimento
            Ali.Cantidad = Cantidad
            await Ali.save()
            response.status(201).json({
                message: 'Se ha actualizado el alimento con exito',
                data: Ali
            })
        }
   
    
    async borrar({response, params: {id}}){
        const Ali = await Alimento.find(id)
        
            await Ali.delete()
        response.status(201).json({
            message: 'El Alimento ha sido eliminado',
        })
        }

}

module.exports = AlimentoController
