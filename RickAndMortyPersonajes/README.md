## Productos - Docker Setup 

El propósito de este repositorio es el de proveer el código y los archivos necesarios para creación de un proyecto desarrollado en vue que se encarga de consumir la api de rick y morty para mostrar su información y interactuar con esta de manera intuitiva ordenandola por categorías y buscandola especificamente con una barra de búsqueda.


Esta parte contiene instrucciones para crear y ejecutar la aplicación llamada rickymorty usando Docker.

### Instalación de dependencias de node.
```
npm install
```


Primero es necesario viajar a la ruta de nuestro proyecto "RickAndMortyPersonajes" en nuestra terminal. 

Posterior a ello usaremos el comando para construir la imagen de nuestro proyecto utilizando los archivos Dockerfile proporcionados en la estructura del proyecto: 

docker build -t rickymorty .

Tendremos que esperar unos segundos a que la imagen termine de crearse y una vez creada podemos ejecutarla creando un contenedor para esta y especificando el puerto que utilizaremos, en este caso el 8080, y especificando el nombre del contenedor y la imagen que este ejecutará

docker run -d -p 8080:8080 --name rickymorty-container rickymorty

Los archivos de Docker integrados nos ayudan a configurar de manera adecuada la creación de nuestra imagen y la ejecución de nuestro proyecto.

-d: Ejecuta el contenedor en modo de fondo (detached mode).
-p 8080:8080: Mapea el puerto 8080 del contenedor al puerto 8080 de la máquina host.
--name 
rickymorty: El nombre de la imagen Docker que creaste en el paso anterior.

Accede al puerto. 

Puedes verificar que tu contenedor está ejecutándose con el siguiente comando:
docker ps

Para detener el contenedor, ejecuta el siguiente comando:
docker stop rickymorty-container

Otros comandos útiles:

Ver los logs del contenedor:
docker logs rickymorty-container

Otra forma de trabajar con Docker es al momento de crear la imagen acceder a ella desde la interfaz gráfica de Docker directo desde el programa a través del cual puedes correr las imagenes y crear el contenedor directamente de manera facil e intuitiva especificando el puerto, el nombre entre otras cosas. 







