import express from 'express';
import morgan from 'morgan';
import saludoRouter from './src/routes/saludo.route.js';
import personaRouter from './src/routes/persona.route.js';
import { miPrimerMiddleware, validarApiKey } from './src/middlewares/global.middleware.js';
const app = express();
const PORT: number = process.env.PORT || 4000;
app.use(miPrimerMiddleware);
//app.use(validarApiKey);

app.use(express.json());
app.use(morgan('dev'));
app.use('/saludo', saludoRouter);
app.use('/persona', personaRouter);
app.listen(PORT, () => {
  console.log(`API Personas está corriendo en el puerto ${PORT}`);
});

// Principios SOLID
// Single Responsability -> Responsabilidad Única

// KISS -> Keep It Simple Stupid!
// DRY -> Don't Repeat Yourself

// Arquitecturas => Componentes
// Monoliticas 
// Aplicaciones Distribuidas 

// Patrones Arquitectónicos
// MVC => Modelo - Vista - Controlador
// DDD => Domain Driven Development/Design
// MVVM => Model - View - ViewModel (Apps Moviles)
// MVP => Model View Presenter
// Clean Architecture / Onion (Cebolla)
// Hexagonal

// App.js
// router
// controller
// service