## Base de Datos (Prisma)

Para configurar la base de datos localmente:

1.  Crea un archivo `.env` en la carpeta `backend/` basándote en el archivo `.env.example`.
2.  Configura tu variable `DATABASE_URL` con tus credenciales de PostgreSQL.
3.  Ejecuta las migraciones para crear las tablas en tu base de datos:
    ```bash
    npx prisma migrate dev
    ```