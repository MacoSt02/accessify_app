# Accessify App

Accessify App és una aplicació desenvolupada amb Vite, React, TypeScript i Tailwind CSS. Aquesta aplicació consumeix l'API Accessify per gestionar els permisos d'accés a les diferents rutes segons l'usuari que iniciï sessió.

## Característiques

- Autenticació d'usuaris mitjançant JWT.
- Control d'accés a rutes segons permisos d'usuari.
- Disseny modern amb Tailwind CSS.
- Desenvolupament eficient amb Vite i TypeScript.

## Requisits

- Node.js 18+
- npm o yarn
- API Accessify en funcionament

## Instal·lació

1. Clonar el repositori:
   ```sh
   git clone https://github.com/MacoSt02/accessify_app.git
   cd accessify_app
   ```

2. Instal·lar dependències:
   ```sh
   npm install
   ```

3. Configurar les variables d'entorn:
   Crea un fitxer `.env` a la ruta del projecte i afegeix-hi la configuració necessària:
   ```env
   API_URL=http://localhost:3000
   ```

4. Iniciar el servidor de desenvolupament:
   ```sh
   npm run dev
   ```

## Estructura del Projecte

- `src/components/` - Components reutilitzables.
- `src/pages/` - Pàgines principals de l'aplicació.
- `src/routes/` - Configuració de rutes i permisos.
- `src/context/` - Gestió de l'estat global i autenticació.

## Llicència

Aquest projecte està llicenciat sota la [MIT License].