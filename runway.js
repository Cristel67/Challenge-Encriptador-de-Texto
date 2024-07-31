function encriptar() {
    let mensaje = document.getElementById('mensaje').value;
    let resultado = mensaje
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('resultado').value = resultado;
    document.getElementById('copiar').removeAttribute('disabled');

    // Ocultar los elemento
    document.querySelector('.main__imagen__duda').style.display = 'none';
    document.querySelector('.main_mensaje_secundario').style.display = 'none';
    document.querySelector('.main_parrafo').style.display = 'none';

    document.getElementById('encriptar').setAttribute('disabled', 'true');
    document.getElementById('desencriptar').removeAttribute('disabled');
}

function desencriptar() {
    let mensaje = document.getElementById('mensaje').value;
    let resultado = mensaje
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('resultado').value = resultado;
    document.getElementById('copiar').removeAttribute('disabled');

    document.querySelector('.main__imagen__duda').style.display = 'none';
    document.querySelector('.main_mensaje_secundario').style.display = 'none';
    document.querySelector('.main_parrafo').style.display = 'none';

    document.getElementById('encriptar').setAttribute('disabled', 'true');
    document.getElementById('desencriptar').removeAttribute('disabled');
}

function copiarMensaje() {
    let resultado = document.getElementById('resultado');
    resultado.select();

    navigator.clipboard.writeText(resultado.value).then(function() {
        alert('Texto copiado al portapapeles');
        document.getElementById('copiar').setAttribute('disabled', 'true');
    })
    document.getElementById('mensaje').value = '';
    document.getElementById('resultado').value = ''; 
    document.getElementById('copiar').setAttribute('disabled', 'true'); 
    document.getElementById('encriptar').removeAttribute('disabled'); 
    document.getElementById('desencriptar').removeAttribute('disabled')
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copiar').setAttribute('disabled', 'true');
});

function reiniciar() {
    document.getElementById('mensaje').value = '';
    document.getElementById('resultado').value = ''; 
    document.getElementById('copiar').setAttribute('disabled', 'true'); 
    document.getElementById('encriptar').removeAttribute('disabled'); 
    document.getElementById('desencriptar').removeAttribute('disabled'); 
    
    // Mostrar los elementos que se ocultaron al mostrar el mensaje
    document.querySelector('.main__imagen__duda').style.display = 'block';
    document.querySelector('.main_mensaje_secundario').style.display = 'block';
    document.querySelector('.main_parrafo').style.display = 'block';
}

