


const options = require('./data')
const User = require('./contoller/user');
//const gameby = require('./data/gameby')
//console.log(options)
//console.log(gameby)

let jogar = new User({opt: options}).game();
jogar
