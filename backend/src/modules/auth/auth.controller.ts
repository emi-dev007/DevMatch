//AQUI SE MANEJARÁN CODIGOS HTTP 201, 400, 409
import type {Request, Response} from 'express';
import {registerUser} from './auth.service.js';

export const register = async (req: Request, res: Response) =>{
    try{
        const { fullName, email, password, confirmPassword } = req.body;

        //validar que todos los campos obligatorios estén presentes
        if(!fullName || !email || !password || !confirmPassword){
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        //validar que fullName no esté vacío
        if(fullName.trim().length === 0){
            return res.status(400).json({error: 'El nombre no puede estar vacio.'});
        }

        //validar el formato del correo electronico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({error: 'El formato del correo electronico es invalido.'});
        }

        //verificar que password y confirmPassword coincidan
        if(password !== confirmPassword){
            return res.status(400).json({error: 'Las contraseñas no coincide.'});
        }

        //Ejecutar la logica de negocio del servicio
        const newUser = await registerUser(fullName, email, password);

        //Devolver HTTP 201 cuando el registro sea exitoso
        return res.status(201).json({
            message: 'Cuenta creada con exito.',
            user: newUser,
        });

    } catch(error: any){
        //atrapar el error especifico de duplicidad de servicio
        if(error.message === 'Este correo ya existe'){
            return res.status(409).json({error: 'El correo electronico ya esta registrado'});
        }

        console.error('[Auth Controller error]:', error);
        return res.status(500).json({error: 'Error interno del servidor al registrar usuario'});

    }

};