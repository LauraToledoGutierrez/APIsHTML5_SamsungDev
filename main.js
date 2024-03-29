/* Práctica API's en HTML5 Samsung Desarrolladoras - Laura Toledo Gutiérrez */

//Se activa cuando el HTML ha sido cargado
document.addEventListener("DOMContentLoaded", function() {
  //Accedemos a los elementos del HTML
  var video = document.getElementById("video");
  var input = document.getElementById("fileInput");
  var playBtn = document.getElementById("playBtn");
  var pauseBtn = document.getElementById("pauseBtn");
  var volumeUpBtn = document.getElementById("volumeUpBtn");
  var volumeDownBtn = document.getElementById("volumeDownBtn");

  //Se activa cuando se selecciona un archivo
  input.addEventListener("change", function() {
    var file = this.files[0];
    if (file) {
      //Crea una URL de objeto para el video
      var blobUrl = URL.createObjectURL(file);
      //Establece la URL como la fuente del elemento de video, se carga en el reproductor
      video.src = blobUrl;
    }
  });

  //Se activa si el archivo seleccionado no es un archivo de video valido
  video.addEventListener("error", function() {
    alert("El archivo seleccionado no es válido.");
  });

  //Se activa cuando el archivo de video se comienza a cargar en el productor
  video.addEventListener("loadstart", function() {
    alert("Cargando...");
  });

  //Se activa cuando el video esta listo para reproducirse
  video.addEventListener("canplay", function() {
    //Muestra la información del archivo de video 
    alert('El video esta listo para reproducirse\n\n' + 
          'Nombre del archivo: ' + input.files[0].name + '\n' +
          'Tamaño del archivo: '+input.files[0].size + '\n' +
          'Duración del video: ' + video.duration.toFixed(2) + ' segundos');
  });

  //Acción play cuando se pulse el boton Play
  playBtn.addEventListener("click", function() {
    if (video.paused) {
      video.play();
    } 
  });

  //Acción pause cuando se pulse el boton Pause
  pauseBtn.addEventListener("click", function() {
    if (!video.paused) {
      video.pause();
    } 
  });

  //Acción subir volumen cuando se pulse el boton +
  volumeUpBtn.addEventListener("click", function() {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  });

  //Accion bajar volumen cuando se pulse el boton -
  volumeDownBtn.addEventListener("click", function() {
    if (video.volume > 0) {
      video.volume -= 0.1;
    }
  });
});
