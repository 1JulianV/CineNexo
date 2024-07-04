# CineNexo

## Descripción
Página diseñada para explorar y añadir una colección de películas.
Permite a los usuarios añadir nuevas películas a la base de datos y luego visualizarlas de manera organizada en la página web.

## Tecnologías Utilizadas

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap

### Backend
- Express
- Mongoose
- MongoDB
- Node.js

## Instalación
>[!important]
>Antes de ejecutar la aplicación, asegúrate de crear un archivo `.env` en la carpeta `back` con la siguiente configuración:
>MONGO_URI = "tu_url_de_conexión"

Debes tener una cuenta creada en MongoDB y una base de datos. Si no tienes una cuenta, puedes crearla en [MongoDB](https://www.mongodb.com/).

Una vez creada la base de datos, debes conectarla siguiendo estos pasos:

1. Dirígete a `databases`.
   
   ![image](https://github.com/pi-rym/PM2-1JulianV/assets/140673778/cdf6005c-aa36-4924-a028-f9af5434c70f)

2. Haz clic en la opción `Connect`.
   
   ![image](https://github.com/pi-rym/PM2-1JulianV/assets/140673778/989fbbcd-2167-40b7-8d27-6698d22d9ce2)

3. Una vez dentro, selecciona la opción `Drivers`.
   
   ![image](https://github.com/pi-rym/PM2-1JulianV/assets/140673778/0eda5450-caee-4c7f-920b-277596b0ee03)

4. Copia la URL de conexión proporcionada y colócala en tu archivo `.env` con el formato `MONGO_URI = "tu_url_de_conexión"`.

Para comenzar, abre una terminal en la carpeta `back`.

```bash
npm install
Después de instalar las dependencias, ejecuta el siguiente comando para iniciar la aplicación:
npm start
Esto pondrá en marcha la base de datos en el puerto 3000.   
```

Para correr el frontend, debes descargar la extensión Live Server de Visual Studio Code, o también puedes abrir una terminal en la carpeta del `front` y ejecutar los siguientes comandos:
```
npm install
npm start
Esto pondrá en marcha la página.
```
## Uso

Puedes utilizar mi página para visualizar las películas disponibles en el inicio.

<img src="https://github.com/pi-rym/PM2-1JulianV/assets/140673778/ef1cf752-d19b-4df9-ada9-038ef50e2696" alt="Visualización de películas" width="500">

También puedes entrar a la sección de "Añadir Películas", donde deberás llenar un formulario para añadir una nueva película.

<img src="https://github.com/pi-rym/PM2-1JulianV/assets/140673778/ac58a530-00fd-4f9b-98a7-cb7a7b64a98c" alt="Formulario para añadir película" width="500">

## Contacto

- <a href="https://www.linkedin.com/in/julian-villegas-fullstack/"><img src="https://freelogopng.com/images/all_img/1656958733linkedin-logo-png.png" alt="linkedin" width="100"/></a>
- Correo electrónico: julivilleaugusto@gmail.com  
- Teléfono: +54 9 2920 26-6443
