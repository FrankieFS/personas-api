import * as service from '../services/persona.service.js';
export const obtenerTodos = async (req: any, res: any) => {
  const resultado = await service.obtenerTodos();
  res.json(resultado);
};
export const obtenerPorId = async (req: any, res: any) => {
  const {
    id
  } = req.params;
  if (id === undefined) {
    res.status(400).send('Por favor especificar el id');
    return;
  }
  if (isNaN(id)) {
    res.status(400).send('El Id debe ser un número');
    return;
  }
  const parsedId: number = parseInt(id);
  const persona = await service.obtenerPorId(parsedId);
  if (!persona) {
    // persona == null
    res.status(404).send(`Persona con id ${parsedId} no existe`);
    return;
  }
  res.json(persona);
};
export const crear = async (req: any, res: any) => {
  const persona = req.body;
  const personaCreada = await service.CrearPersona(persona);
  res.status(201) //Creado
  .json({
    mensaje: "Persona creada",
    persona: personaCreada
  });
};
export const actualizar = async (req: any, res: any) => {
  const {
    id
  } = req.params;
  const datos = req.body;
  const parsedId: number = parseInt(id);
  const personaExistente = await service.obtenerPorId(parsedId);
  if (!personaExistente) {
    res.status(404).json({
      mensaje: `Persona con id ${parsedId} no existe`
    });
    return;
  }
  const personaActualizada = await service.actualizar(parsedId, datos);
  res.json({
    mensaje: 'Persona fue actualizada',
    persona: personaActualizada
  });
};
export const eliminar = async (req: any, res: any) => {
  const {
    id
  } = req.params;
  const parsedId: number = parseInt(id);
  const personaExistente = await service.obtenerPorId(parsedId);
  if (!personaExistente) {
    res.status(404).json({
      mensaje: `Persona con id ${parsedId} no existe`
    });
    return;
  }
  await service.eliminar(parsedId);
  res.json({
    mensaje: 'Persona eliminada'
  });
};