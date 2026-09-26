import express from 'express';
import type {Request, Response} from 'express';

//Inicializa la aplicacion Express
const app = express();
const PORT = 3000;

//MIddleware para que express comprenda JSON
app.use(express.json());

//Primer ENDPOINT
app.get('/health', (req: Request, res: Response) =>{
    res.json({
        status: 'ok',
        message: 'DevMatch API is running'
    });
});

//Levantar el server
app.listen(PORT, () =>{
    console.log(`[Backend] Servidor escuchando en http://localhost:${PORT}`);
});