# back-Noticias

Para ejecutar el servidor se debe ingresar las lineas "npm i" para obtener todas las dependencias necesarias que se utilizaran.

La base de datos en la cual se almacena el Json obtenido de la API, se encuentra en la nube, se trabajo con Atlas.
Como cliente se utilizo Axio para obtner la informacion, recorrer e ir almacenando dentro de la base

La estructura como tal se encuentra dividia en models, controllers y routes, para mantener un orden, además se creo un archivo .env para configurar la conexion a la base de datos, ya que al conectar nos pide una contraseña, y al estar oculto este archivo al momento de ponerlo en produccion genera un cierto nivel de seguiridad.

En el servidor se crear los servicios para ingresar las noticias, mostrar y eliminar las noticias, posteriormente son consumidas por la parte del front-end para mostrar al usuario final
