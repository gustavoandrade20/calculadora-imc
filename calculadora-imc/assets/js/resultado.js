
const resultado = document.querySelector('#resultado');
const msg = localStorage.getItem('imcResultado');

if (msg) {
resultado.innerHTML = msg; // ✅ usa innerHTML para interpretar o <br>
} else {
resultado.textContent = "Nenhum resultado encontrado.";
}

