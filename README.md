# Test-Back-End
BackEnd Developer - Technical test for DaCodes and TrackChain

- Para iniciar la aplicaciÓn solo basta con ejecutar los siguientes comandos:
    - npm install
    - npm start

- **ANEXE EN ESTE PROYECTO EL ARCHIVO "Books-Test-DaCodes-TrackChain.postman_collection.json" QUE CONTIENE LA DEMOSTRACIÓN DE LA SOLUCIÓN**

- **Explicar el proceso**
    - Utilice la siguiente estructura para regresar los mensajes -> para regresar un valor o respuesta correcta utilice ({status:1, response:"Mensaje"}), en caso de un error la estructura es ({status:-1, response:"Mensaje"}) y para indicar que no hay registros aun en el caso de los select ({status:0, response:[]})
    - Para esta prueba utilice arreglos definidos ya que no se contaba con un SMBD.
    - Para WS de agregar como tal realice un push al arreglo con los nuevos valores que vienen en el body cuando se realiza la petición.
    - Para WS de listar Únicamente obtuve el arreglo y lo mande como respuesta;
    - Para WS de editar como tal actualice la posición del arreglo según el id que se recibe por parámetro 
    - Para WS de eliminar  aplique un splice() para remover el objeto según el id que se recibe por parámetro 

- **Como mejoraria la propuesta** 
    - Agregaria JSON Web Token para mantener la seguridad de la información 
