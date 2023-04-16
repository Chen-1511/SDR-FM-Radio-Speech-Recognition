import threading
import time

# Función que guarda el texto en un archivo
def guardar_texto(texto):
    with open('output.txt', 'a') as archivo:
        archivo.write(texto)

# Función que se ejecutará en el hilo
def hilo_guardar_texto():
    while True:
        texto = ''
        with open('output.txt', 'r') as f:
            texto = f.read()

            #Coordenadas de señal
            #Texto_Copleto = text + textoRadio
    
        with open('output.txt', 'w') as f:
            #f.write(Texto_Copleto)
            f.write(texto)
        
        # Esperar 1 segundo antes de actualizar el archivo de nuevo
        time.sleep(2)


# Crear y ejecutar el hilo
hilo = threading.Thread(target=hilo_guardar_texto)
hilo.start()
