export function miPrimerMiddleware(req: any, res: any, next: any) {
  console.log('Acabo de recibir una petición');
  next();
}
export function validarApiKey(req: any, res: any, next: any) {
  const apiKeyHeader: string = process.env.API_KEY_HEADER || 'x-api-key';
  const apiKey: string = process.env.API_KEY || '12345';
  if (req.headers[apiKeyHeader as any] !== apiKey) {
    console.log('Petición proviene de un usuario no autorizado');
    return res.status(401).json({
      mensaje: 'No autorizado'
    });
  }
  next();
}