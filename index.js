window.onload = function (){
    document.getElementById("boton").addEventListener("click", datos);
  };
  
  function datos (evento) {
    //Obtencion de los datos del .html
    let Nombre = document.getElementById("tNombre").value;
    let Ciudad = document.getElementById("tCiudad").value;
    let Pais = document.getElementById("tPais").value;
    //Mostrar informacion del usuario en la consola
    console.log(Nombre+", "+Ciudad+", "+Pais);
  
    //Respuesta de la API
    const api_id = "cded2db80f0cfb258be585849b4ccc23";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&appid=${api_id}&Lang=es&units=metric`;
  
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        console.log(datos);
        //Datos dados por la API
        let temp = datos.main.temp;
        let temp_min = datos.main.temp_min;
        let temp_max = datos.main.temp_max;
        let icon = datos.weather['0'].icon;
        console.log(temp+", "+temp_min+", "+temp_max);
        console.log("Icono: "+icon);
        //Informacion mostrada en el Modal
        contenido.innerHTML =  `
        <b>Hola ${Nombre}, hoy en la ciudad de ${Ciudad} hace una temperatura de:<br></b>
        <b><h3>${temp} ºC</h3></b>
        Max: ${temp_max} ºC<br>
        Min: ${temp_min} ºC<br>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="100px" class="img-fluid"><br>
        `
      })
      .catch((error) =>{
        console.error(error);
        contenido.innerHTML =  `
        Es necesario que se completen los campos <b>Ciudad</b> o <b>País</b> como minimo
        `
      });
  };