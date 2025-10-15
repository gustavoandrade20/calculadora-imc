const resultado = document.querySelector('#resultado');
const msg = localStorage.getItem('imcResultado');

if (msg) {
    resultado.textContent = msg;
} else {
    resultado.textContent = "Nenhum resultado encontrado.";
}