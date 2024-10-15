## Productos - Docker Setup 

El propósito de este repositorio es el de proveer el código y los archivos necesarios para la creación de una aplicación simple con Docker que sea capaz de implementar un menú con un catálogo de productos con una interfaz intuitiva, y con la capacidad de seleccionar categorías o navegar entre pestañas etc. este repositorio puede ser util ya que se puede usar como plantilla al momento de crear otros proyectos ya sea relacionados a la temática o no, o que solo tengan una funcionalidad similar


Esta parte contiene instrucciones para crear y ejecutar la aplicación llamada cart-app usando Docker.

### Instalación de dependencias de node.
```
npm install
```
### Correr el proyecto con Vue.

```
npm run serve
```


Primero es necesario viajar a la ruta de nuestro proyecto "Productos" en nuestra terminal. 

Posterior a ello usaremos el comando para construir la imagen de nuestro proyecto utilizando los archivos Dockerfile proporcionados en la estructura del proyecto: 

docker build -t productos-app .

Tendremos que esperar unos segundos a que la imagen termine de crearse y una vez creada podemos ejecutarla creando un contenedor para esta y especificando el puerto que utilizaremos, en este caso el 8080, y especificando el nombre del contenedor y la imagen que este ejecutará

docker run -d -p 8080:8080 --name productos-container productos

Los archivos de Docker integrados nos ayudan a configurar de manera adecuada la creación de nuestra imagen y la ejecución de nuestro proyecto.

-d: Ejecuta el contenedor en modo de fondo (detached mode).
-p 5000:5000: Mapea el puerto 5000 del contenedor al puerto 5000 de la máquina host.
--name 
cart-app: El nombre de la imagen Docker que creaste en el paso anterior.

Accede al puerto. 

Puedes verificar que tu contenedor está ejecutándose con el siguiente comando:
docker ps

Para detener el contenedor, ejecuta el siguiente comando:
docker stop cart-app-container

Otros comandos útiles:

Ver los logs del contenedor:
docker logs cart-app-container

Otra forma de trabajar con Docker es al momento de crear la imagen acceder a ella desde la interfaz gráfica de Docker directo desde el programa a través del cual puedes correr las imagenes y crear el contenedor directamente de manera facil e intuitiva especificando el puerto, el nombre entre otras cosas. 







