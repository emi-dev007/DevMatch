import express from 'express';
import authRoutes from './modules/auth/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware para poder leer JSON 
app.use(express.json());

//Rutas de autenticacion
//creamos el endpoint del contrato: POST /api/auth/register
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});

