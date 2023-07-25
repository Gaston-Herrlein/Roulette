# Ruleta dinamica 

Este proyecto fue realizado con fines didacticos.
La idea base de la ruleta la obtuve del proyecto de RetaxMaster. Que posteriormente lo modifique para convertirlo en un proyecto de react, capaz de modificar las secciones de la ruleta para hacerlo mas dinamico. Dejo el repositorio del proyecto original a continuacion  
    https://github.com/RetaxMaster/roulette


## Secciones

* Se puede modificarse el numero de secciones de 3 a 12
* Se puede modificar el texto de las mismas modificando el archivo project-list.json. La aplicacion lee el archivo mediante comunicacion http (utilizando axios) por lo que es necesario levantar el archivo (se recomienda utilizar json-server)
    1. Modificar el archivo con las secciones que conformaran la ruleta. 
    2. Levantar el archivo
    3. Ejecutar la aplicacion de react ( npm run dev )


## Angulo de secciones

Para poder realizar la ruleta se necesitan principalmente 2 clases. 
La primera "roulette-section" que funcionara como contenedor para nuestras secciones. La modificaicon de la mista se realiza de estilo inline calculando la rotacion y deformacion dependiendo de la cantidad de secciones.
La segunda "roulette-section-container" contiene el contenedor con el texto, en este caso se intento operar con el mismo metodo que para el caso anterior pero como no me lee el objeto de json que contiene las clases se decide crear un archivo .css con una lista de clases que identifiquen cada tipo de ruleta por separado segun las secciones que esta tenga.


