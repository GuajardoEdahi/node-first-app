
const {createFile} = require('./helpers/multiplicar')

const argv = require('./config/yargs')



console.clear();



// console.log(argv);

// console.log('multiplier:yargs', argv.multiplier);

createFile(argv.m,argv.l,argv.i)
.then(fileName => {console.log(fileName,'creado')})
.catch(err => {console.log(err)})



// console.log(process.argv);


// const [,, arg3='multiplier=5'] = process.argv
// const [, multiplier] = arg3.split('=')

//  console.log(multiplier)







