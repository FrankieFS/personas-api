export async function crearSaludo(nombre: any) {
  const saludo: Record<string, any> = {
    nombreRecibido: nombre,
    mensaje: `Hola ${nombre}`
  };
  return saludo;
}