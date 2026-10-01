# ⚙️ DevMatch - Backend (API)

Este módulo contiene la API REST de DevMatch, responsable de las reglas de negocio, autenticación, autorización y persistencia de la plataforma. 

**Owner del Backend:** David.

## 🛠️ Stack Tecnológico
* **Entorno:** Node.js + Express.
* **Lenguaje:** TypeScript.
* **Base de Datos:** PostgreSQL + Prisma (ORM).
* **Arquitectura:** Monolito Modular.

## 🚀 Configuración Local

1. **Asegura la versión de Node:**
   * Revisa el archivo `.nvmrc` en la raíz para usar la versión exacta de Node acordada por el equipo.
   ``bash
   nvm install(si no la tienes descargada)
   nvm use

2. **Instalar dependencias:**
   ```bash
   cd backend
   npm install

3. **Variables de Entorno**
    Copia el archivo env de ejemplo 
    ``bash
    cp .env.example .env

4. **Levantar Base de Datos**
    * Antes de interactuar con la base de datos, levanta el contenedor de PostgreSQL
    ``bash
    docker compose up -d
    **Base de Datos (Prisma)**
    * Una vez activada la base, ejecuta los siguientes comandos para generar el cliente, aplicar las migraciones y semillar el catalogo de Skills
    ``bash
    npx prisma generate
    npx prisma migrate dev
    npx prisma db seed

5. **Levantar el Servidor**
    ``bash
    npm run dev

**Principios de Desarrollo**
* Estructura: Agrupa por módulos de negocio (ej. auth, users, projects), no por tipo de archivo global.

* Regla de dependencias: Sigue el flujo route -> controller -> service -> repository -> Prisma.

* Testing: Haremos pruebas progresivas (Vitest). La calidad es responsabilidad de quien implementa la funcionalidad