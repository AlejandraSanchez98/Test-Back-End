# Test-Back-End
BackEnd Developer - Technical test for DaCodes and TrackChain

- Para iniciar la aplicacion solo basta con ejecutar los siguientes comandos:
    - npm install
    - npm start

- **Explicar el proceso**
    - Utilice la siguiente estructura para regresar los mensajes -> para regresar un valor o respuesta correcta utilice ({status:1, rresponse:"Mensaje"}), en caso de un error la estructura es ({status:-1, response:"Mensaje"}) y para indicar que no hay registros aun en el caso de los select ({status:0, response:[]})
    - Para esta prueba utilice arreglos definidos ya que no se contaba con un SMBD.
    - Para WS de agregar como tal realice un push al arreglo con los nuevos valores que vienen en el body cuando se realiza la petición.
    - Para WS de listar unicamente obtuve el arreglo y lo mande como respuesta;
    - Para WS de editar como tal actualice la posición del arreglo segun el id que se recibe por parametro 
    - Para WS de eliminar  aplique un splice() para remover el objeto segun el id que se recibe por parametro 

- **Como mejoraria la propuesta** 
    - Agregaria JSON Web Token para mantener la seguridad de la información 
