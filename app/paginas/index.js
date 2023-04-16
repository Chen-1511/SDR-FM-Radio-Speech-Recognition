// Creamos un objeto XMLHttpRequest, me hace una petición HTTP
var xhr = new XMLHttpRequest();

// Especificamos la ruta del archivo txt, que está local en mi computador
var rutaArchivo = "/home/popuser/SDR-Speech-Recognition/app/output.txt";

// Abrimos el archivo
xhr.open("GET", rutaArchivo);

// Especificamos que se trata de un archivo de texto
xhr.overrideMimeType("text/plain");

// Esperamos a que la petición se complete
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        // Creamos un elemento párrafo
        var parrafo = document.createElement("p");
        // Insertamos el contenido del archivo txt en el párrafo
        parrafo.textContent = xhr.responseText;
        // Agregamos el párrafo al documento
        document.body.appendChild(parrafo);
    }
};

// Enviamos la petición
xhr.send();

