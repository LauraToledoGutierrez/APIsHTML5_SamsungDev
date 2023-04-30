document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("video");
  var playBtn = document.getElementById("play-btn");
  var pauseBtn = document.getElementById("pause-btn");
  var volumeUpBtn = document.getElementById("volume-up-btn");
  var volumeDownBtn = document.getElementById("volume-down-btn");
  var fileInfo = document.getElementById("file-info");

  var input = document.getElementById("file-input");
  input.addEventListener("change", function() {
    var file = this.files[0];

    if (file) {
      var blobUrl = URL.createObjectURL(file);
      video.src = blobUrl;

      fileInfo.innerHTML = '<p>Nombre del archivo: ' + file.name + '</p>' +
                             '<p>Última modificación: ' + file.lastModifiedDate.toLocaleString() + '</p>' +
                             '<p>Tamaño: ' + file.size + ' bytes</p>';
    }
  });

  playBtn.addEventListener("click", function() {
    if (video.paused) {
      video.play();
    
    } 
  });

  pauseBtn.addEventListener("click", function() {
    if (!video.paused) {
      video.pause();
  
    } 
  });

  volumeUpBtn.addEventListener("click", function() {
    if (video.volume < 1) {
      video.volume += 0.1;
    }
  });

  volumeDownBtn.addEventListener("click", function() {
    if (video.volume > 0) {
      video.volume -= 0.1;
    }
  });

  video.addEventListener("error", function() {
    alert("El archivo seleccionado no es válido.");
  });

  video.addEventListener("loadstart", function() {
    alert("Cargando...");
  });

  video.addEventListener("canplay", function() {
    /*fileInfo.innerHTML += '<p>Duración del video: ' + video.duration.toFixed(2) + ' segundos</p>' +
                           '<p>Ancho del video: ' + video.size + ' píxeles</p>' +
                           '<p>Alto del video: ' + video.videoHeight + ' píxeles</p>';*/
    alert("El video está listo para reproducirse.");
  });



});
