
const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("peso inválido", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválido", false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const dica = getDica(nivelImc);

    const msg = `<br>Seu IMC é ${imc} (${nivelImc}).<br>
    <br>
    ${dica}`;

    // setResultado(msg, true);


    localStorage.setItem('imcResultado', msg);

    window.location.href = 'pagina2.html';

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {

        return nivel[0] 
    }

}

function getDica(nivel) {
  const dicas = {
    'Abaixo do peso': 'Procure aumentar a ingestão de alimentos saudáveis e praticar exercícios de fortalecimento. Consulte um nutricionista para ajustar sua dieta.',
    'Peso normal': 'Parabéns! Continue mantendo uma alimentação equilibrada e praticando atividades físicas regularmente.',
    'Sobrepeso': 'Evite alimentos ultraprocessados e tente incluir mais frutas e verduras nas refeições. Caminhadas diárias já ajudam bastante!',
    'Obesidade grau 1': 'Busque acompanhamento médico e adote hábitos saudáveis de forma gradual. Pequenas mudanças geram grandes resultados.',
    'Obesidade grau 2': 'Procure um nutricionista e pratique atividades físicas leves. Cuidar da saúde é um passo de cada vez.',
    'Obesidade grau 3': 'É importante procurar acompanhamento médico. Mudanças na rotina e alimentação podem melhorar muito sua qualidade de vida.'
  };
  return dicas[nivel];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}