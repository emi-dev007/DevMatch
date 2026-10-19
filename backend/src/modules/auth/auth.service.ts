//PRISMA Y ARGON2
import {PrismaClient} from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

export const registerUser = async (fullName: string, email: string, password: string) =>{
    //normalizar el correo antes de guardarlo
    const normalizedEmail = email.toLowerCase().trim();

    //comprobar que el correo no esté registrado anteriormente
    const existingUser = await prisma.user.findUnique({
        where: {email: normalizedEmail},
    });

    if(existingUser){
        //el controlador atrapará esto y devolverá HTTP 409
        throw new Error('Este correo ya existe');
    }

    //Guardar la constraseña mediante Argon2id
    const passwordHash = await argon2.hash(password, {
        type: argon2.argon2id,
    });

    // Usar prisma para registrar al usuario en PostgreSQL
    const newUser = await prisma.user.create({
        data: {
            fullName,
            email: normalizedEmail,
            passwordHash,
        },
    });

    //devolver solo los datos publicos
    return{
        id: newUser.id,
        fullName: newUser.fullName,
        email: newUser.email,
    };
};