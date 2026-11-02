import * as personaRepo from '../repos/persona.repo.js';
export async function obtenerTodos() {
  return personaRepo.obtenerTodos();
}
export async function obtenerPorId(id: any) {
  return personaRepo.obtenerPorId(id);
}
export async function CrearPersona(persona: any) {
  return personaRepo.crear(persona);
}
export async function actualizar(id: any, persona: any) {
  return personaRepo.actualizar(id, persona);
}
export async function eliminar(id: any) {
  return personaRepo.eliminar(id);
}