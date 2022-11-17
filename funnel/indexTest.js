const textField = document.querySelectorAll('.textfield')
const inputs = document.querySelectorAll('.input')
var problemas = []

class User{
    constructor(valorGasto, cliques, pageV, cPM,  cTR){
        this.valorGasto = valorGasto
        this.cTR = cTR
        this.cliques = cliques
        this.pageV = pageV
        this.cPM = cPM
    }
}
function start(){
    var botaoGargalo = document.querySelector('.btn')
    exception()
    botaoGargalo.addEventListener('click', () =>{
        if(exceptionCampoObrigatorio())handleResolverGargalo()
    })
}

function handleResolverGargalo(){
    var mostrarDicas = document.querySelector("#card-itens-lista")
    mostrarDicas.innerHTML = ""

    gargalo(new User(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value));

    //criando a lista de problemas
    for(var i = 0; i < problemas.length; i++){
        var dicas = document.createElement("li")
        dicas.innerHTML = problemas[i];
        mostrarDicas.appendChild(dicas)
    }

    //limpando o array de problemas
    while(problemas.length){
        problemas.pop()
    }
   
}

function gargalo(user){
    var existeProblema = false
    var texto
    var x = 100*user.pageV/user.cliques

    if(user.valorGasto < 25){
        texto = "O orçamento está baixo. Aumente para pelo menos 25 reais. Para conseguir dinheiro, teste estes sites: 99freela, GetNinjas e Workana."
        problemas.push(texto)
        existeProblema = true
    }
    if(x < 60){
        texto = "Melhore o carregamento da página. Vc está perdendo " + (100 - x) + "% do seu tráfego. Pra uma anlálise mais concreta use o site GTMetrix."
        problemas.push(texto)
        existeProblema = true
    }
    if(user.cTR < 2){
        texto = "Um CTR abaixo de 2% é péssimo para o seu negócio. Melhore o criativo, deixando-o mais chamativo, com promessas mais fortes (cuidado com os bloqueios no FaceBook)."
        problemas.push(texto)
        existeProblema = true
    }
    if(user.cPM > 15){
        texto = "Um CPM acima de R$15 é considerado alto. Melhore o criativo e gere mais engajamento no anúncio. Evite super segmentar seu público."
        problemas.push(texto)
        existeProblema = true
    }
    if(!existeProblema){
        problemas.push("Suas métricas estão ótimas")
    }
}

function exception(){
    for(let i = 0; i < textField.length; i++){
        textField[i].addEventListener("keypress", function(e){
            const keyCode = (e.keyCode ? e.keyCode : e.wich)
            if(!(keyCode > 47 && keyCode < 58)){
                e.preventDefault()
            }
        })
    }
}

function exceptionCampoObrigatorio(){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            return false;
        }
    }
    return true;
}

start()