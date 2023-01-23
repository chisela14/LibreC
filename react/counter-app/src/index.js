import React from 'react';
import {createRoot} from 'react-dom/client';
//import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const container = document.querySelector('#root');
//const saludo = <h1>Hola mundo</h1>
//ReactDOM.render(saludo, container);

const root = createRoot(container);
//root.render(<PrimeraApp nombre={123} />); //aquí hay que cerrar todas las etiquetas, hasta los <br/>, espacio antes del cierre por convenio
//acepta numeros entre{} pero da fallo en la consola (sin {} ni siquiera lo acepta)

root.render(<CounterApp value={123} />)