window.onload = function() {Toastify({
    text: "Para poder ocultar las listas, doble click!",
    duration: 7000,
    className: "info",
    style: {
      background: "linear-gradient(to right, #62a6cd, #29a0e4)",
    }
  }).showToast();
}
const mercedesSpecs = document.getElementById("mercedesSpecs");

let btnMerc = document.getElementById("mercedes");

btnMerc.addEventListener("click", () => {
    fetch('mercedes.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((specs) => {
                const li = document.createElement('li')
                li.innerHTML = `
            <h3>${specs.marca}</h3>
            <h4>${specs.modelo}</h4>
            <p>Potencia: ${specs.potencia}</p>
            <p>Tipo de motor: ${specs.tipoMotor}</p>
            <p>Cilindrada: ${specs.motorizacion}</p>
            <p>Alimentación: ${specs.alimentacion}</p>
            <p>Distribución: ${specs.distribucion}</p>
            <p>Transmisión: ${specs.transmision}</p>
            <p>Tipo de tracción: ${specs.traccion}</p>
            <p>Vel. Máxima: ${specs.velMax}</p>
            <p>RPM Máx: ${specs.maxRPM}</p>
            <p>Torque: ${specs.parMax}</p>
            <p>Peso: ${specs.peso}</p>
            <p>Batalla: ${specs.batalla}</p>
            <p>Longitud: ${specs.logintud}</p>
            <p>Ancho: ${specs.ancho}</p>
            <p>Frenos: ${specs.frenos}</p>
            <br>
            `
                mercedesSpecs.append(li)

            });
        });
});
btnMerc.addEventListener("dblclick", hideElements);

function hideElements() {
    document.getElementById("mercedesSpecs").style.display = "none";
    location.reload();
}

const fiatSpecs = document.getElementById("fiatSpecs");

let btnFiat = document.getElementById("fiat");

btnFiat.addEventListener("click", () => {
    fetch('fiat.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((specs) => {
                const li = document.createElement('li')
                li.innerHTML = `
            <h3>${specs.marca}</h3>
            <h4>${specs.modelo}</h4>
            <p>Potencia: ${specs.potencia}</p>
            <p>Tipo de motor: ${specs.tipoMotor}</p>
            <p>Cilindrada: ${specs.motorizacion}</p>
            <p>Alimentación: ${specs.alimentacion}</p>
            <p>Distribución: ${specs.distribucion}</p>
            <p>Vel. Máxima: ${specs.velMax}</p>
            <p>RPM Máx: ${specs.maxRPM}</p>
            <p>Batalla: ${specs.batalla}</p>
            <p>Longitud: ${specs.logintud}</p>
            <p>Ancho: ${specs.ancho}</p>
            <p>Frenos: ${specs.frenos}</p>
            <p>Diametro Embrague: ${specs.diametroEmbrague}</p>

            <br>
            `
                fiatSpecs.append(li)

            });
        });
});

btnFiat.addEventListener("dblclick", hideElements);

function hideElements() {
    document.getElementById("fiatSpecs").style.display = "none";
    location.reload();
}

const vwSpecs = document.getElementById("vwSpecs");

let btnVw = document.getElementById("volkswagen");

btnVw.addEventListener("click", () => {
    fetch('vwgolf.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((specs) => {
                const li = document.createElement('li')
                li.innerHTML = `
            <h3>${specs.marca}</h3>
            <h4>${specs.modelo}</h4>
            <p>Potencia: ${specs.potencia}</p>
            <p>Tipo de motor: ${specs.tipoMotor}</p>
            <p>Cilindrada: ${specs.motorizacion}</p>
            <p>Alimentación: ${specs.alimentacion}</p>
            <p>Distribución: ${specs.distribucion}</p>
            <p>Transmisión: ${specs.transmision}</p>
            <p>Tipo de tracción: ${specs.traccion}</p>
            <p>Vel. Máxima: ${specs.velMax}</p>
            <p>RPM Máx: ${specs.maxRPM}</p>
            <p>Torque: ${specs.parMax}</p>
            <p>Peso: ${specs.peso}</p>
            <p>Batalla: ${specs.batalla}</p>
            <p>Longitud: ${specs.longitud}</p>
            <p>Ancho: ${specs.ancho}</p>
            <p>Frenos: ${specs.frenos}</p>
            <br>
            `
                vwSpecs.append(li)

            });
        });
});

btnVw.addEventListener("dblclick", hideElements);

function hideElements() {
    document.getElementById("vwSpecs").style.display = "none";
    location.reload();
}

const alfaSpecs = document.getElementById("alfaSpecs");

let btnAlfa = document.getElementById("alfaRomeo");

btnAlfa.addEventListener("click", () => {
    fetch('alfa.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((specs) => {
                const li = document.createElement('li')
                li.innerHTML = `
            <h3>${specs.marca}</h3>
            <h4>${specs.modelo}</h4>
            <p>Potencia: ${specs.potencia}</p>
            <p>Tipo de motor: ${specs.tipoMotor}</p>
            <p>Cilindrada: ${specs.motorizacion}</p>
            <p>Alimentación: ${specs.alimentacion}</p>
            <p>Distribución: ${specs.distribucion}</p>
            <p>Transmisión: ${specs.transmision}</p>
            <p>Tipo de tracción: ${specs.traccion}</p>
            <p>Vel. Máxima: ${specs.velMax}</p>
            <p>RPM Máx: ${specs.maxRPM}</p>
            <p>Torque: ${specs.parMax}</p>
            <p>Peso: ${specs.peso}</p>
            <p>Batalla: ${specs.batalla}</p>
            <p>Longitud: ${specs.logintud}</p>
            <p>Ancho: ${specs.ancho}</p>
            <p>Frenos: ${specs.frenos}</p>
            <br>
            `
                alfaSpecs.append(li)

            });
        });

});

btnAlfa.addEventListener("dblclick", hideElements);

function hideElements() {
    document.getElementById("alfaSpecs").style.display = "none";
    location.reload();
}

const listaElegida = document.getElementById("lista-elegida");
const formulario = document.getElementById("formulario");

let eleccion = [];

formulario.addEventListener('submit', agregarCorredor);
document.addEventListener('DOMContentLoaded', () => {
    eleccion = JSON.parse(localStorage.getItem('eleccion')) || []
    renderHTML()
})

let sumatoria = JSON.parse(localStorage.getItem('eleccion'))


function agregarCorredor(evt) {
    evt.preventDefault()



    const choice = document.getElementById("choice").value


    if (choice === '') {

        mostrarError("No admite vacios");
        return;
    }

    const choiceObj = {
        id: Date.now(),
        texto: choice
    }


    eleccion.push(choiceObj)



    renderHTML()

    formulario.reset()

}


function renderHTML() {
    limpiarHTML();
    if (eleccion.length > 0) {

        for (let opcion of eleccion) {

            const li = document.createElement('li');
            li.textContent = opcion.texto;

            listaElegida.appendChild(li);
        }
    }
    sincronizarStorage()
}

function sincronizarStorage() {
    localStorage.setItem('eleccion', JSON.stringify(eleccion));
}

function limpiarHTML() {
    while (listaElegida.firstChild) {
        listaElegida.removeChild(listaElegida.firstChild)
    }
}




function mostrarError(msg) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = msg;
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError)
}

formulario.addEventListener("click",aviso);

function aviso(){
    Toastify({
        text: "Por favor, completa de manera adecuada, marca y modelo del coche que estas por agregar; esta acción no tiene retroceso una vez realizada. Seamos responsables.",
        duration: 7000,
        className: "info",
        style: {
          background: "linear-gradient(to right, #62a6cd, #29a0e4)",
        }
      }).showToast();
}