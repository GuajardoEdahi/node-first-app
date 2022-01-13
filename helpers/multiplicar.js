
const fs = require('fs');
var colors = require('colors');

const createFile = async(multiplier,list,iterations) => {

    try{
        
        let salida, consola = '';

       

         for(let i =1; i<=iterations; i++){

            salida+=`${multiplier} X ${i} = ${multiplier*i}\n`;
            consola+=`${colors.yellow(multiplier)} ${'X'.brightRed} ${i} ${'='.brightRed} ${colors.green(multiplier*i)}\n`;
            
         
         }

         if(list===true){
         console.log('================================'.blue.bold)
         console.log('      Tabla del'.bold, multiplier);
         console.log('================================'.blue.bold);
         console.log(consola);
         }
        
            const fileName = await(`tabla-${multiplier}.txt`)
            
         
         
            fs.writeFileSync(`./exit/tabla-${multiplier}.txt`, salida);

            return fileName;
         
         

    }catch(error){
        throw error
    }

}


module.exports={
   createFile,
}






