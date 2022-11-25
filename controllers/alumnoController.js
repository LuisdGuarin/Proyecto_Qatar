const Resultado = require('../model/Resultado')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Resultado.find({}, (error, res)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los resultados de partido'
            })
        }
        return res.render('index', {resultado: resultado})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const alumno = new Resultado({
        nombre: req.body.nombre,
        edad: req.body.edad
    })
    alumno.save(function(error,resultado){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el resultado'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    Resultado.findByIdAndUpdate(id, {nombre, edad}, (error, resultado)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Resultado'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Resultado.findByIdAndRemove(id, (error, resultado)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el resultado'
            })
        }
        res.redirect('/')
    })
}