# Contribuir a DevMatch

Este documento define la forma oficial de trabajo del equipo de desarrollo de **DevMatch**.

Su objetivo es que todos los integrantes trabajemos de manera consistente, ordenada y trazable, independientemente del área en la que estemos colaborando.

> Si existe una duda sobre cómo trabajar dentro del repositorio, este documento debe ser el primer punto de consulta.

---

# 1. Principios de trabajo

En DevMatch seguimos estas reglas generales:

1. No se trabaja directamente sobre `main`.
2. Todo cambio debe estar relacionado con una Issue.
3. Cada tarea debe realizarse en una branch independiente.
4. Todo cambio debe entrar a `main` mediante Pull Request.
5. Nadie aprueba su propio Pull Request.
6. Todo Pull Request debe ser revisado por al menos otro integrante.
7. Las tareas deben ser pequeñas y manejables.
8. La calidad es responsabilidad de todo el equipo.
9. La documentación forma parte del desarrollo.
10. El código debe ser comprensible para más de una persona.

---

# 2. Flujo general de trabajo

El flujo estándar de una tarea es:

```text
Backlog
   ↓
Ready
   ↓
In Progress
   ↓
Branch
   ↓
Commits
   ↓
Pull Request
   ↓
Review
   ↓
Merge
   ↓
Done
```

A nivel de GitHub:

```text
Issue
  ↓
Branch
  ↓
Commits
  ↓
Pull Request
  ↓
Code Review
  ↓
Merge a main
  ↓
Issue cerrada
```

---

# 3. Estados del GitHub Project

Nuestro tablero utiliza los siguientes estados.

## Backlog

Trabajo identificado que queremos realizar en algún momento, pero que todavía no está listo o priorizado para comenzar.

Ejemplos:

- agregar sistema de matchmaking;
- agregar favoritos;
- agregar notificaciones.

---

## Ready

La tarea está suficientemente definida para comenzar.

Una Issue puede entrar en `Ready` cuando:

- tiene un objetivo claro;
- tiene criterios de aceptación;
- sabemos qué queremos construir;
- no depende de una tarea pendiente crítica;
- tiene responsable o puede ser tomada por alguien.

---

## In Progress

Existe una persona trabajando activamente en la tarea.

Cuando alguien comienza una tarea debe:

1. asignarse la Issue;
2. moverla a `In Progress`;
3. crear una branch;
4. comenzar el desarrollo.

### Límite de trabajo en progreso

Cada integrante debe intentar tener:

```text
Máximo 1 tarea principal en In Progress
```

No queremos comenzar muchas tareas y dejar todas incompletas.

---

## Review

El desarrollo terminó y existe un Pull Request esperando revisión.

Una tarea entra en `Review` cuando:

- se completó la implementación;
- se realizó el push;
- existe un Pull Request;
- el PR está vinculado con la Issue.

---

## Done

La tarea está terminada y cumple nuestra Definition of Done.

No significa únicamente:

> "Ya funciona en mi computadora."

La Definition of Done se encuentra más adelante en este documento.

---

# 4. Campos de las Issues

Cada tarea del Project puede utilizar los siguientes campos.

## Assignee

Persona responsable principal de completar la tarea.

Actualmente:

- David
- Ximena
- Emiliano

Que alguien sea responsable no significa que los demás no puedan colaborar.

---

## Area

Área principal a la que pertenece la tarea.

Valores:

```text
Frontend
Backend
Database
Quality
Docs
Product
```

---

## Type

Tipo de trabajo.

```text
Feature
Bug
Chore
Docs
Learning
```

### Feature

Nueva funcionalidad visible o comportamiento nuevo.

Ejemplo:

```text
Crear componente ProjectCard
```

### Bug

Corrección de un comportamiento incorrecto.

Ejemplo:

```text
Corregir filtro de proyectos por tecnología
```

### Chore

Configuración, mantenimiento o infraestructura.

Ejemplo:

```text
Configurar TypeScript
```

### Docs

Documentación.

Ejemplo:

```text
Documentar flujo Git
```

### Learning

Actividad explícita de aprendizaje necesaria para avanzar.

Ejemplo:

```text
Investigar fundamentos de React Router
```

---

# 5. Prioridad

Utilizamos tres niveles.

```text
High
Medium
Low
```

## High

Necesario para avanzar o para el MVP.

## Medium

Importante, pero no bloquea el desarrollo inmediato.

## Low

Puede realizarse después sin afectar el progreso actual.

---

# 6. Estimaciones

Utilizamos estimaciones simples.

```text
XS
S
M
L
```

Referencia aproximada:

```text
XS → menos de 2 horas
S  → algunas horas
M  → aproximadamente un día
L  → entre uno y dos días
```

Si una tarea parece mayor que `L`, debe dividirse.

No buscamos estimaciones perfectas.

Las estimaciones sirven para detectar tareas demasiado grandes.

---



# 9. Antes de comenzar una tarea

Antes de escribir código:

1. verificar que la Issue esté en `Ready`;
2. leer el objetivo;
3. revisar criterios de aceptación;
4. asignarse la Issue;
5. moverla a `In Progress`;
6. actualizar `main`;
7. crear una branch.

---

# 10. Actualizar main

Antes de crear una branch:

```bash
git switch main
git pull origin main
```

Esto reduce la posibilidad de comenzar una tarea sobre código desactualizado.

---

# 11. Convención de branches

Nunca desarrollamos directamente sobre:

```text
main
```

Cada tarea utiliza una branch independiente.

Formato recomendado:

```text
tipo/numero-issue-descripcion
```

Ejemplos:

```text
feature/12-health-endpoint
feature/18-project-card

fix/24-project-filter

chore/5-repository-structure

docs/8-git-workflow

test/31-matching-service
```

El número de Issue ayuda a identificar rápidamente qué trabajo corresponde a la branch.

---

# 12. Tipos de branch

Utilizamos:

```text
feature/
fix/
chore/
docs/
test/
refactor/
```

## feature/

Nueva funcionalidad.

```text
feature/18-project-card
```

## fix/

Corrección de errores.

```text
fix/24-project-filter
```

## chore/

Configuración o mantenimiento.

```text
chore/5-configure-typescript
```

## docs/

Documentación.

```text
docs/8-git-workflow
```

## test/

Trabajo específicamente relacionado con pruebas.

```text
test/31-matching-service
```

## refactor/

Cambio interno que no modifica el comportamiento esperado.

```text
refactor/42-project-service
```

---


# 14. Crear una branch

Ejemplo:

```bash
git switch main
git pull origin main
git switch -c feature/18-project-card
```

Después comprobar:

```bash
git branch
```

La branch actual aparecerá marcada con `*`.

---

# 15. Commits

Utilizamos una versión sencilla de Conventional Commits.

Formato:

```text
tipo: descripción
```

Tipos principales:

```text
feat:
fix:
docs:
chore:
test:
refactor:
```

Ejemplos:

```text
feat: add project card component

feat: add health endpoint

fix: correct project filtering

docs: document git workflow

chore: configure typescript

test: add matching service tests

refactor: simplify project service
```

---



# 17. Guardar cambios

Flujo habitual:

```bash
git status
```

Revisar qué archivos cambiaron.

Después:

```bash
git add .
```

Crear commit:

```bash
git commit -m "feat: add project card component"
```

Y subir:

```bash
git push
```

La primera vez que se sube una branch puede ser necesario:

```bash
git push -u origin feature/18-project-card
```

---

# 18. No subir información sensible

Nunca subir al repositorio:

```text
.env
contraseñas
tokens
API keys
credenciales
claves privadas
```

La información sensible debe estar en archivos ignorados mediante:

```text
.gitignore
```

Cuando necesitemos variables de entorno tendremos:

```text
.env
```

y un archivo público:

```text
.env.example
```

Ejemplo:

```env
DATABASE_URL=
PORT=
```

`.env.example` contiene únicamente nombres de variables, nunca secretos reales.

---

# 19. Pull Requests

Todo cambio a `main` debe pasar por Pull Request.

Flujo:

```text
Branch
  ↓
Pull Request
  ↓
Review
  ↓
Merge
  ↓
main
```

Nunca:

```text
trabajo local
   ↓
push directo
   ↓
main
```

---


# 21. Descripción del Pull Request

El repositorio utiliza una plantilla de Pull Request.

Como mínimo debe contener:

```md
## ¿Qué cambia este PR?

Breve explicación.

## Issue relacionada

Closes #XX

## Cambios realizados

- Cambio
- Cambio

## ¿Cómo probarlo?

1. Paso
2. Paso

## Checklist

- [ ] El código funciona localmente
- [ ] Revisé mis propios cambios
- [ ] No incluí secretos
- [ ] Cumple los criterios de aceptación
```

---

# 22. Vincular PR con Issue

Todo Pull Request debe estar relacionado con su Issue.

Utilizamos:

```text
Closes #18
```

Por ejemplo:

```md
## Issue relacionada

Closes #18
```

Cuando el Pull Request se integre a `main`, GitHub puede cerrar automáticamente la Issue.

Esto nos proporciona trazabilidad:

```text
Issue #18
   ↓
Branch
   ↓
PR #27
   ↓
Merge
   ↓
Issue #18 cerrada
```

---

# 26. Request Changes

Si existe un problema que debería resolverse antes del merge:

```text
Request changes
```

El desarrollador realiza los cambios en la misma branch.

Ejemplo:

```bash
git add .
git commit -m "fix: address review feedback"
git push
```

El Pull Request se actualizará automáticamente.

No se crea otro PR.

---

# 28. Merge

Cuando el Pull Request:

- cumple criterios de aceptación;
- funciona correctamente;
- fue revisado;
- fue aprobado;
- tiene conversaciones resueltas;

puede integrarse a `main`.

Nuestra estrategia preferida es:

```text
Squash and merge
```

Esto mantiene `main` con un historial más limpio.

---

# 29. Después del merge

Después de integrar el PR:

1. verificar que la Issue se cerró;
2. verificar que pasó a `Done`;
3. eliminar la branch si GitHub no lo hizo automáticamente;
4. actualizar el repositorio local.

```bash
git switch main
git pull origin main
```

Opcionalmente eliminar la branch local:

```bash
git branch -d feature/18-project-card
```

---

# 52. Definition of Ready

Una Issue está `Ready` cuando:

- [ ] Tiene un título claro.
- [ ] Tiene un objetivo.
- [ ] Tiene criterios de aceptación.
- [ ] Es suficientemente pequeña.
- [ ] No tiene bloqueos conocidos importantes.
- [ ] El equipo entiende qué se espera.

---

# 53. Definition of Done

Una tarea está `Done` cuando:

- [ ] Cumple todos sus criterios de aceptación.
- [ ] El código funciona localmente.
- [ ] No rompe funcionalidad existente conocida.
- [ ] No contiene secretos.
- [ ] No contiene código temporal innecesario.
- [ ] Se actualizó la documentación necesaria.
- [ ] Existe un Pull Request.
- [ ] El Pull Request está vinculado con la Issue.
- [ ] Fue revisado por al menos otro integrante.
- [ ] Todos los comentarios importantes fueron resueltos.
- [ ] Fue aprobado.
- [ ] Fue integrado a `main`.
- [ ] La Issue está cerrada.

Cuando incorporemos CI y testing automatizado también serán obligatorios:

- [ ] Lint pasa.
- [ ] Tests pasan.
- [ ] Build pasa.
- [ ] CI pasa correctamente.

---


# 55. Flujo completo de ejemplo

Issue:

```text
#18 Crear componente ProjectCard
```

La Issue está:

```text
Ready
```

Ximena comienza.

Se asigna la Issue y la mueve:

```text
Ready
  ↓
In Progress
```

Actualiza main:

```bash
git switch main
git pull origin main
```

Crea branch:

```bash
git switch -c feature/18-project-card
```

Desarrolla.

Crea commits:

```bash
git add .
git commit -m "feat: add project card component"
```

Sube:

```bash
git push -u origin feature/18-project-card
```

Abre Pull Request:

```text
feature/18-project-card
        ↓
       main
```

Incluye:

```text
Closes #18
```

La Issue pasa a:

```text
Review
```

David o Emiliano revisan.

Si solicitan cambios:

```bash
git add .
git commit -m "fix: address review feedback"
git push
```

Cuando es aprobado:

```text
Squash and merge
```

GitHub integra el cambio:

```text
main
```

La Issue se cierra.

El Project pasa a:

```text
Done
```

---

