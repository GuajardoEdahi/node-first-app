const argv = require('yargs')
.option('m',{

    alias:'multiplier',
    type:'number',
    demandOption:true,
    describe:'Number by which the multiplicand is to be multiplied.'

})

.check((argv,options)=>{
    if(isNaN(argv.m)){
        throw 'Multiplier "m" argument must be a number'
    }
    return true;
})
.option('l', {
    alias:'list',
    type:'boolean',
    default:'false',
    describe:'Shoes the multiplication table up to X10'

})
.option('i', {
    alias:'iterations',
    type:'number',
    default:10,
    describe:'Number of iterations of the multiplication table (10 by default).'

})
.argv


module.exports= argv
 
 