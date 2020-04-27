const fs = require('fs');

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

const heroesController ={
    mostrarArray : function(req,res){
        res.send(heroes);
    },
    detalle:function(req,res){
        var datos="No encontrado";
        heroes.forEach(heroe => {
           if(req.params.id==heroe.id){
             datos=heroe;
           }
       });
        if(datos=="No encontrado"){
            res.send("No encontrado");
        }else{
            res.send("Hola mi nombre es "+datos.nombre+' y soy '+datos.profesion);
        }
    },
    biografia:function(req,res){
        var heroe_encontrado="No encontrado"
        heroes.forEach(heroe => {
            if(req.params.id==heroe.id){
              heroe_encontrado=heroe;
            }
        });
         if(heroe_encontrado=="No encontrado"){
             res.send("No encontrado");
         }     
            if(req.params.ok=="ok"){ 
               res.send("nombre:"+heroe_encontrado.nombre +"<br> reseña: " +heroe_encontrado.resenia); 
            }else{
                res.send("Soy "+heroe_encontrado.nombre +" y lamento que no desees saber mas de mi"); 
            }

    }

}
module.exports=heroesController;

