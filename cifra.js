const divRetorno = document.getElementById('exibeMensagem')
const code = document.getElementById('code'); 
const botao = document.getElementById('btn'); 
const texto = document.getElementById('msg'); 
const mensagemRetorno = document.createElement('p')
const inc = document.createElement(`input`);
inc.id = 'inc';
inc.type = 'number';
inc.placeholder = 'Escolha um número ';


// ***** Mudando o botão de codificar para decofificar e ao contrario
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('click', (event) => {
        const evento = event.target;

        evento.value === 'decodificar' ? botao.innerText = ' Decodificar! ' : botao.innerText = ' Codificar! ';
    })
})

//***** aparece a barra para escolher o numero de posições da cifra 
document.querySelectorAll('select').forEach((select) => {
    select.addEventListener('change', (event) => { 
        const evento = event.target;
        const divDoInc = document.getElementById("divmsg");

        evento.value === 'cesar' ? divDoInc.appendChild(inc) : inc.remove(); 

    })
})
// ***** alertas para o usuario
botao.addEventListener('click', () => {
      !texto.value ? (
        alert('Coloque sua mensagem no campo de texto!')
): code.value === 'base64' && texto.value ? (
       exibeNaTela(base64())

) : code.value === 'cesar' && texto.value ? (
       exibeNaTela(cifraCesar())

) : ( alert('Escolha o tipo de código!'))

})
const exibeNaTela = (conteudo) => mensagemRetorno.innerText = conteudo; divRetorno.appendChild(mensagemRetorno);


// ***** Codigo Base64
const base64 = () => botao.textContent.includes('Codificar') ? window.btoa(texto.value) : window.atob(texto.value);


// ***** Cifra de César
const cifraCesar = () => {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let frase = texto.value;
    frase = frase.toLowerCase();
    const inc = document.getElementById('inc') 
    const x = parseInt(inc.value); 
    let fraseCodificada = [];

    for (let i = 0; i < frase.length; i++) { 
        if (frase[i] != ' ') {   
            for (let j = 0; j < alfabeto.length; j++) { 
                if (frase[i] == alfabeto[j]) { 
                    if (botao.textContent.includes('Codificar')) {
                        fraseCodificada[i] = alfabeto[(j + x) % alfabeto.length];  
                    }
                    else {
                        if (j - x >= 0) {
                            fraseCodificada[i] = alfabeto[(j - x)];
                        }
                        else {
                            fraseCodificada[i] = alfabeto[alfabeto.length + (j - x)]
                        }
                    }
                }
            }
        }
        else {
            fraseCodificada[i] = ' ';
        }
    }
    return fraseCodificada.join('');
}