# Login y Registro

Sprint status: Current
Datetimes: 1 de octubre de 2026 → 3 de octubre de 2026
Proyectos: DevMatch (https://app.notion.com/p/DevMatch-6c4a90c040db8339bc73010fd29e03c4?pvs=21)
Tasks: Sin título (https://app.notion.com/p/3e79622fbea780d68532c19ff7e61db9?pvs=21), Sin título (https://app.notion.com/p/3e99622fbea7808cb2d1fa84aa1e2ac1?pvs=21), Sin título (https://app.notion.com/p/3e99622fbea78024b2fbdf77b21c3490?pvs=21)

---

# Sprint Planning:

## Historias de Usuario Objetivo:

---

<aside>
💡

HU_01: Quiero Registrarme en el sistema

</aside>

<aside>
💡

HU_02: Quiero Iniciar Sesión en el Sistema

</aside>

## Escenarios Gherkin

### HU_01

```tsx
# language: es
Característica: Registro de un nuevo usuario en DevMatch (HU-01)
  Como visitante de la plataforma
  Quiero registrarme proporcionando mis datos personales y credenciales
  Para poder crear un perfil y postularme o publicar proyectos

  Reglas:
    - Los campos fullName, email, password y confirmPassword son obligatorios.
    - El correo electrónico (email) debe ser único en el sistema.
    - Las contraseñas (password y confirmPassword) deben coincidir exactamente.
    - La contraseña nunca se almacena en texto plano.

  Antecedentes:
    Dado que la base de datos PostgreSQL está en ejecución y no existen usuarios registrados con el correo "ximena@devmatch.com"

  Escenario: Registro exitoso de un nuevo usuario
    Dado que el visitante desea crear una cuenta en DevMatch
    Cuando el visitante envía los datos de registro válidos:
      | campo           | valor                  |
      | fullName        | Ximena Desarrolladora  |
      | email           | ximena@devmatch.com    |
      | password        | SecurePassword123!     |
      | confirmPassword | SecurePassword123!     |
    Entonces el sistema crea la cuenta de usuario exitosamente
    Y el sistema responde con un código HTTP 201 Created
    Y los datos devuelven la información del usuario (id, fullName, email) sin incluir la contraseña

  Escenario: Fallo en el registro por contraseñas que no coinciden
    Dado que el visitante desea crear una cuenta en DevMatch
    Cuando el visitante envía los datos de registro con contraseñas distintas:
      | campo           | valor                  |
      | fullName        | Ximena Desarrolladora  |
      | email           | ximena@devmatch.com    |
      | password        | SecurePassword123!     |
      | confirmPassword | PasswordDiferente999!  |
    Entonces el sistema rechaza la solicitud de registro
    Y el sistema devuelve un error HTTP 400 Bad Request indicando que las contraseñas no coinciden
    Y ninguna cuenta es almacenada en la base de datos

  Escenario: Fallo en el registro por correo electrónico duplicado
    Dado que ya existe un usuario registrado con el correo "ximena@devmatch.com"
    Cuando un nuevo visitante intenta registrarse utilizando el mismo correo electrónico
    Entonces el sistema rechaza la solicitud de registro
    Y el sistema devuelve un error HTTP 409 Conflict indicando que el correo ya se encuentra registrado
    Y ninguna cuenta adicional es almacenada en la base de datos
```

### HU_02

```tsx
# language: es
Característica: Inicio de sesión de usuario (HU-02)
  Como usuario registrado
  Quiero iniciar sesión utilizando mi correo y contraseña
  Para acceder a mi cuenta y utilizar las funcionalidades protegidas de la plataforma

  Reglas:
    - Los campos email y password son obligatorios.
    - Las credenciales deben coincidir con un usuario existente en la base de datos.
    - El sistema debe generar un token JWT firmado al autenticar exitosamente.

  Antecedentes:
    Dado que el sistema de autenticación está disponible y existe un usuario con el correo "david@devmatch.com" y contraseña "BackendPro2026!"

  Escenario: Inicio de sesión exitoso
    Dado que el usuario se encuentra en la pantalla de Login
    Cuando el usuario envía sus credenciales correctas:
      | campo    | valor              |
      | email    | david@devmatch.com |
      | password | BackendPro2026!    |
    Entonces el sistema valida las credenciales exitosamente
    Y el sistema responde con un código HTTP 200 OK
    Y la respuesta incluye un token JWT firmado para autorización
    Y la respuesta incluye los datos básicos del perfil (id, fullName, email)

  Escenario: Fallo al iniciar sesión con credenciales incorrectas
    Dado que el usuario se encuentra en la pantalla de Login
    Cuando el usuario envía una contraseña incorrecta:
      | campo    | valor              |
      | email    | david@devmatch.com |
      | password | ClaveEquivocada1!  |
    Entonces el sistema rechaza la solicitud
    Y el sistema devuelve un error HTTP 401 Unauthorized
    Y no se genera ni devuelve ningún token JWT

  Escenario: Fallo al iniciar sesión por campos obligatorios vacíos
    Dado que el usuario se encuentra en la pantalla de Login
    Cuando el usuario envía el formulario sin ingresar datos:
      | campo    | valor |
      | email    |       |
      | password |       |
    Entonces el sistema rechaza la solicitud por reglas de validación
    Y el sistema devuelve un error HTTP 400 Bad Request indicando que los campos no pueden estar vacíos
    Y no se genera ni devuelve ningún token JWT
```

## Schema

---

```tsx
generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String   @id @default(uuid())
  fullName     String
  email        String   @unique
  passwordHash String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

## Contrato de API

---

### Login/Register

- POST /api/auth/register
    
    Body:
    
    ```tsx
    {
      "fullName": "Ximena Desarrolladora",
      "email": "ximena@devmatch.com",
      "password": "SecurePassword123!",
      "confirmPassword": "SecurePassword123!"
    }
    ```
    
    Respuesta Exitosa: 201
    
    ```tsx
    {
      "message": "Usuario registrado exitosamente",
      "user": {
        "id": "c7a3f821-4b12-4e2a-9123-111122223333",
        "fullName": "Ximena Desarrolladora",
        "email": "ximena@devmatch.com"
      }
    }
    ```
    
    Ejemplo de respuesta de error: 409
    
    ```tsx
    {
      "error": {
        "code": "EMAIL_ALREADY_EXISTS",
        "message": "El correo electrónico ya se encuentra registrado."
      }
    }
    ```
    
- `POST /api/auth/login`
    
    Body:
    
    ```tsx
    {
      "email": "ximena@devmatch.com",
      "password": "SecurePassword123!"
    }
    ```
    
    Respuesta exitosa: 200
    
    ```tsx
    {
      "message": "Autenticación exitosa",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "c7a3f821-4b12-4e2a-9123-111122223333",
        "fullName": "Ximena Desarrolladora",
        "email": "ximena@devmatch.com"
      }
    }
    ```
    
    Ejemplo de Error: 401
    
    ```tsx
    {
      "error": {
        "code": "INVALID_CREDENTIALS",
        "message": "Credenciales inválidas. Verifique su correo y contraseña."
      }
    }
    ```
    

[https://github.com/emi-dev007/DevMatch.git](https://github.com/emi-dev007/DevMatch.git)