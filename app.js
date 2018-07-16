const argv = require('./config/yargs').argv;
const color = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch(comando){

	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then( nombreArchivo => console.log(`Archivo: ${ nombreArchivo.green }`))
			.catch(err => console.log(err));
		break;
	default:
		console.log('Comando no reconocido');		
}

//forma de pasar argv en node por linea de comandos
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//otra forma de imprimir texto de color en consola
// console.log(`Archivo:`, color.green(${ nombreArchivo.green }`))
