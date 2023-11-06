var suma0 = 0
var suma00 = 0
var suma1 = 0
var suma2 = 0
var sumaf = 0
var inputs = ''
var valorSelect = ''
var choose = []
var listmath = []
var res = 0
var pfa = 0

const fin = document.getElementById('fin')
const t1 = document.getElementById('t1')
const t2 = document.getElementById('t2')
const t3 = document.getElementById('t3')
const sig1 = document.getElementById('sig1')
const Svolver = document.querySelectorAll('.volver')
const Sir = document.querySelectorAll('.ir')
const sig = document.getElementById('sig')
const atr = document.getElementById('atr')
const fim = document.querySelectorAll('.fim')

function calcular(){
    for (var i = 0; i < 5; i++){
        var res1 = 0
        res1 = choose[i] * list1[i]
        listmath.push(res1)
    }
    for (var i = 0; i < 5; i++){
        res += listmath[i]
    }
    document.getElementById('paso-1').textContent = res;
    for (var i = 1; i <= 14; i++) {
        var valorSelect = document.getElementById('valor' + i).value;
        suma1 += parseInt(valorSelect);
    }
    pfa = res * (0.65 + (0.01 * suma1))
    perhor = pfa / (1/8)
    perhor /= red2
    document.getElementById('final').textContent = pfa.toFixed(1);
    document.getElementById('paso-2').textContent = suma1;
    document.getElementById('persona').textContent = perhor;
    if(pfa <= 100){
        document.getElementById('clasifi').textContent = 'Nivel de complejidad: Sencilla';
    }else if(pfa > 100 && pfa <= 300){
        document.getElementById('clasifi').textContent = 'Nivel de complejidad: Media';
    }else if(pfa > 300){
        document.getElementById('clasifi').textContent = 'Nivel de complejidad: Dificil';
    }
}


function saved(){
    suma0 = 0
    document.getElementById('error').textContent = '';
    list = []
    list1 = []
    for (var i = 1; i <= 5; i++) {
        inputs = document.getElementById('in' + i).value;
        onlynum = /^[0-9]+$/.test(inputs)
        if((parseInt(inputs)|| 0) >= 0 && onlynum){
            list.push(true)
            list1.push(parseInt(inputs))
            document.getElementById('in' + i).classList.remove('error')
        }else{
            document.getElementById('error').textContent = 'Ingresa un numero valido';
            document.getElementById('in' + i).classList.add('error')
            list.push(false)
        }
    }
    if(list.every(function(elemento) { return elemento === true; })){
        sig1.disabled = false
    }else{
        sig1.disabled = true 
    }
}

function saved2(){
    nump = document.getElementById('nump').value
    onlynum2 = /^[0-9]+$/.test(nump)
    document.getElementById('error404').textContent = ' ';
    if((parseInt(nump)|| 0) >= 0 && onlynum2){
        red = true
        red2 = parseInt(nump)
        document.getElementById('nump').classList.remove('error')
    }else{
        document.getElementById('error404').textContent = 'Ingresa un numero valido';
        document.getElementById('nump').classList.add('error')
        red = false
    }
    if(red == true){
        fin.disabled = false
    }else{
        fin.disabled = true 
    }
}



const ETAPA = {
    PRIMERA: 'PRIMERA',
    VOLVER1: 'VOLVER1',
    VOLVER2: 'VOLVER2',
    PRIMERAI: 'PRIMERAI',
    VOLVERI: 'VOLVERI',
}

ancho = 0
function mover(etapa){
    if(etapa == ETAPA.PRIMERA){
        ancho -= 100
        document.documentElement.style.setProperty('--slider-main', ancho + '%');
    }else if(etapa == ETAPA.VOLVER1){
        ancho += 100
        document.documentElement.style.setProperty('--slider-main', ancho + '%');
    }else if(etapa == ETAPA.VOLVERI){
        document.documentElement.style.setProperty('--slider-trans','0');
    }else if(etapa == ETAPA.PRIMERAI){
        document.documentElement.style.setProperty('--slider-trans','-100%');
    }else if(etapa == ETAPA.VOLVER2){
        document.documentElement.style.setProperty('--slider-main', '0');
        document.documentElement.style.setProperty('--slider-trans','0');
        ancho = 0
        suma0 = 0
        suma1 = 0
        inputs = ''
        valorSelect = ''
        choose = []
        listmath = []
        list = []
        list1 = []
        res = 0
        pfa = 0
        red = 0
        red2 = 0
        for (var i = 1; i <= 5; i++) {
            document.getElementById('in' + i).value = '0';
        }
        for (var i = 1; i <= 14; i++) {
            document.getElementById('valor' + i).value = '0';
        }
        document.getElementById('nump').value = '0';
    }
}


Sir.forEach(function(boton) {
    boton.addEventListener('click', ()=> mover(ETAPA.PRIMERA))
})
Svolver.forEach(function(boton) {
    boton.addEventListener('click', ()=> mover(ETAPA.VOLVER1))
})
fim.forEach(function(boton) {
    boton.addEventListener('click', ()=> mover(ETAPA.VOLVER2))
})
sig.addEventListener('click', ()=> mover(ETAPA.PRIMERAI))
atr.addEventListener('click', ()=> mover(ETAPA.VOLVERI))


const OP = {
    PRIMERA: 'PRIMERA',
    SEGUNDA: 'SEGUNDA',
    TERCERA: 'TERCERA'
}

function choosen(op) {
    if(op == OP.PRIMERA){
        choose = [3,4,3,7,5]
    }else if(op == OP.SEGUNDA){
        choose = [4,5,4,10,7]
    }else if(op == OP.TERCERA){
        choose = [6,7,6,15,10]
    }
}

t1.addEventListener('click', ()=> choosen(OP.PRIMERA))
t2.addEventListener('click', ()=> choosen(OP.SEGUNDA))
t3.addEventListener('click', ()=> choosen(OP.TERCERA))
