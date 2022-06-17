import * as controller from './modules/controller.js';
import chalk from 'chalk';

const log = console.log;

const sum  = controller.suma(1,2)
const sum2 = controller.suma(4,5)
let result = controller.multiplica(sum, sum2);
log(`El resultado es: ${chalk.green(result)} `); 
