import * as saludoService from '../services/saludo.service.js';
export const saludar = async (req: any, res: any) => {
  res.send('Hola Mundo');
};
export const saludarUsandoNombreEnQueryParameter = async (req: any, res: any) => {
  const {
    nombre
  } = req.query;
  if (nombre === undefined) {
    res.status(400).send('No ha incluido el nombre');
    return;
  }
  const saludo = await saludoService.crearSaludo(nombre);
  res.json(saludo);
};
export const saludarUsandoNombreEnUrl = async (req: any, res: any) => {
  const {
    nombre
  } = req.params;
  if (nombre === undefined) {
    res.status(400).send('No ha incluido el nombre');
    return;
  }
  const saludo = await saludoService.crearSaludo(nombre);
  res.json(saludo);
};