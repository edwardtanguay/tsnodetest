import * as tools from '../tools.js';
const rawComponentName = process.argv[2];
console.log('creating component named: ' + tools.capitalizeFirstLetter(rawComponentName));
