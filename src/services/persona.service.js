import * as personaRepo from '../repos/persona.repo.js';

export async function obtenerTodos() {
    return personaRepo.obtenerTodos();
}

export async function obtenerPorId(id) {
    return personaRepo.obtenerPorId(id);
}

export async function CrearPersona(persona) {
    return personaRepo.crear(persona);
}

export async function actualizar(id, persona) {
    return personaRepo.actualizar(id, persona);
}

export async function eliminar(id) {
    return personaRepo.eliminar(id);
}