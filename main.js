document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("video");
  var playBtn = document.getElementById("play-btn");
  var pausebtn = document.getElementById("pause-btn");
  var volumeUpBtn = document.getElementById("volume-up-btn");
  var volumeDownBtn = document.getElementById("volume-down-btn");

  playBtn.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      
    } 
  });

  pausebtn.addEventListener("click", function() {
    if (video.play) {
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
    alert("El video está listo para reproducirse.");
  });

  var input = document.createElement("input");
  input.type = "file";
  input.accept = "video/*";

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

  document.body.appendChild(input);
});
