const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')
const hor = document.querySelector('.horas')

let miliNum = 0
let segNum = 0
let minNum = 0
let horNum = 0 
let INTERVALO

function milissegundos() {
  miliNum++
  if (miliNum < 10) {
    miliseg.innerHTML = '0' + miliNum
  } else {
    miliseg.innerHTML = miliNum
  }

  if (miliNum == 99) {
    miliNum = 0
    segundos()
  }
}

function segundos() {
  segNum++
  if (segNum < 10) {
    seg.innerHTML = '0' + segNum
  } else {
    seg.innerHTML = segNum
  }

  if (segNum == 59) {
    segNum = 0
    minutos()
  }
} 

function minutos() {
  minNum++
  if (minNum < 10) {
    min.innerHTML = '0' + minNum
  } else {
    min.innerHTML = minNum
  }

  if (minNum == 59) {
    minNum = 0
    horas()
  }

  if(minNum == 25 ){
    alert("Hora do Descanso!")
    iniciar()
    }

  if(minNum == 30){
    alert("Recomeçar os Estudos!")
    iniciar()
    }
  
  if(minNum == 55 ){
    alert("Hora do Descanso!")
    iniciar()
    }
} 
      
function horas() {
  horNum++
  if (horNum < 10) {
    hor.innerHTML = '0' + horNum
  } else {
    hor.innerHTML = horNum
  }    
  if(horNum == 1){
    alert("Recomeçar os Estudos!")
    iniciar()
    }
  
  if((horNum == 1) && (minNum == 25) ){
    alert("Hora do Descanso!")
    iniciar()
    }  

  if((horNum == 1) && (minNum == 30)){
    alert("Recomeçar os Estudos!")
    iniciar()  
    }

  if((horNum == 1) && (minNum == 25) ){
    alert("Hora do Descanso!")
    iniciar()
    }  

  if((horNum == 1) && (minNum == 30)){
    alert("Recomeçar os Estudos!")
    iniciar()  
    }
  if((horNum == 1) && (minNum == 55) ){
    alert("Hora do Descanso!")
    iniciar()
    }  

  if((horNum == 2) && (minNum == 10)){
    alert("Parabéns!!! Você concluiu os ciclos POMODOROS!")
    resetar
    }  
}

function iniciar() {
  clearInterval(INTERVALO)
  INTERVALO = setInterval(() => {
    milissegundos()
  }, 10)
}

 function pausar() {
  clearInterval(INTERVALO)
}

function resetar() {
  clearInterval(INTERVALO)
  miliNum = 0
  segNum = 0
  minNum = 0
  miliseg.innerHTML = '00'
  seg.innerHTML = '00'
  min.innerHTML = '00'
}
