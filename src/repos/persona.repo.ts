import pool from '../config/db.js';
export async function obtenerTodos() {
  const query: string = 'SELECT * FROM persona ORDER BY id';
  const {
    rows
  } = await pool.query(query);
  return rows;
}
export async function obtenerPorId(id: any) {
  const query: string = 'SELECT * FROM persona WHERE id = $1 ';
  const {
    rows
  } = await pool.query(query, [id]);
  return rows;
}
export async function crear(persona: any) {
  const {
    nombre,
    apellido,
    esta_soltero,
    fecha_nacimiento
  } = persona;
  const query: string = `INSERT INTO persona (nombre, apellido, esta_soltero, fecha_nacimiento)
                   VALUES ($1, $2, $3, $4)
                   RETURNING id, nombre, apellido, esta_soltero, fecha_nacimiento`;
  const {
    rows
  } = await pool.query(query, [nombre, apellido, esta_soltero, fecha_nacimiento]);
  return rows[0];
}
export async function actualizar(id: any, persona: any) {
  const {
    nombre,
    apellido,
    esta_soltero,
    fecha_nacimiento
  } = persona;
  const query: string = `UPDATE persona SET
                   nombre=$2,
                   apellido=$3,
                   esta_soltero=$4,
                   fecha_nacimiento=$5
                   WHERE id = $1
                   RETURNING id, nombre, apellido, esta_soltero, fecha_nacimiento`;
  const {
    rows
  } = await pool.query(query, [id, nombre, apellido, esta_soltero, fecha_nacimiento]);
  return rows[0];
}
export async function eliminar(id: any) {
  const query: string = 'DELETE FROM persona WHERE id = $1';
  const {
    rowCount
  } = await pool.query(query, [id]);
  return rowCount > 0;
}