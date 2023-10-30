var suma0 = 0
var suma00 = 0
var suma1 = 0
var suma2 = 0
var sumaf = 0
var inputs = ''
var valorSelect = ''
var choose = []
listmath = []
res = 0
pfa = 0

const t1 = document.getElementById('t1')
const t2 = document.getElementById('t2')
const t3 = document.getElementById('t3')
const sig1 = document.getElementById('sig1')
const fin = document.getElementById('fin')
const fin0 = document.getElementById('fin0')


const ETAPA = {
    PRIMERA: 'PRIMERA',
    SEGUNDA: 'SEGUNDA',
    TERCERA: 'TERCERA',
    REAPLAY: 'REAPLAY'
}

function mover(etapa){
    if(etapa == ETAPA.PRIMERA){
        document.documentElement.style.setProperty('--slider-main','-100%');
    }else if(etapa == ETAPA.SEGUNDA){
        document.documentElement.style.setProperty('--slider-main','-200%');
    }else if(etapa == ETAPA.TERCERA){
        document.documentElement.style.setProperty('--slider-main','-300%');
    }else if(etapa == ETAPA.REAPLAY){
        document.documentElement.style.setProperty('--slider-main','0');
    }
}

t1.addEventListener('click', ()=> mover(ETAPA.PRIMERA))
t2.addEventListener('click', ()=> mover(ETAPA.PRIMERA))
t3.addEventListener('click', ()=> mover(ETAPA.PRIMERA))
sig1.addEventListener('click', ()=> mover(ETAPA.SEGUNDA))
fin.addEventListener('click', ()=> mover(ETAPA.TERCERA))
fin0.addEventListener('click', ()=> mover(ETAPA.REAPLAY))

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
    return suma0
}

function saved0(){
    listmath = []
    res = 0
    for (var i = 0; i < 5; i++){
        var res1 = 0
        res1 = choose[i] * list1[i]
        listmath.push(res1)
    }
    console.log (listmath, 'Hola')
    for (var i = 0; i < 5; i++){
        res += listmath[i]
    }
    document.getElementById('paso-1').textContent = res;
}

sig1.addEventListener('click', ()=> saved0())



const sig = document.getElementById('sig')
const atr = document.getElementById('atr')


const DIRECTION = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    FINISHISED: 'FINISHED'
}

function save(opcion){
    if(opcion == DIRECTION.RIGHT){
        document.documentElement.style.setProperty('--slider-trans','-100%');
        for (var i = 1; i <= 7; i++) {
            var valorSelect = document.getElementById('valor' + i).value;
            suma1 += parseInt(valorSelect);
        }
    }else if(opcion == DIRECTION.LEFT){
        document.documentElement.style.setProperty('--slider-trans', 0);
        suma1 = 0
    }else if(opcion == DIRECTION.FINISHISED){
        for (var i = 8; i <= 14; i++) {
            var valorSelect = document.getElementById('valor' + i).value;
            suma2 += parseInt(valorSelect);
            sumaf = suma2 + suma1
            pfa = res * (0.65 + (0.01 * sumaf))
        }
        console.log (sumaf, pfa);
        document.getElementById('final').textContent = pfa.toFixed(1);
        document.getElementById('paso-2').textContent = sumaf;
        if(pfa <= 100){
            document.getElementById('clasifi').textContent = 'Nivel de complejidad: Sencilla';
        }else if(pfa >= 101 && pfa <= 300){
            document.getElementById('clasifi').textContent = 'Nivel de complejidad: Media';
        }else{
            document.getElementById('clasifi').textContent = 'Nivel de complejidad: Dificil';
        }
    
    }

}

sig.addEventListener('click', ()=> save(DIRECTION.RIGHT))
atr.addEventListener('click', ()=> save(DIRECTION.LEFT))
fin.addEventListener('click', ()=> save(DIRECTION.FINISHISED))

function reaplay(){
suma1 = 0
suma2 = 0
sumaf = 0
suma0 = 0
suma00 = 0

for (var i = 1; i <= 5; i++) {
    document.getElementById('in' + i).value = '0';
}
for (var i = 1; i <= 14; i++) {
    document.getElementById('valor' + i).value = '0';
}
document.documentElement.style.setProperty('--slider-trans', 0);

}

fin0.addEventListener('click', ()=> reaplay())

