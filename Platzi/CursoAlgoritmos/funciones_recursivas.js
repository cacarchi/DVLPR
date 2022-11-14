//EJERCICIO 1: Escribe una función recursiva para un timer que cada 5 minutos se agregue 10 minutos más a su cuenta total.
let ss = 0;
let hh = 0;
let mm = 0;
let time = 0;
function timer(){
    if(ss === 60){
        mm += 1;
        ss = 0;
    }
    if(mm === 60){
        hh += 1;
        mm = 0;
    }
    console.log(`Tiempo actual: ${hh}:${mm}:${ss}`);
    ss += 1;
    time += 1;
    if(time === 300 ){
        mm += 10;
        time = 0
        console.log(`Hora actualizada`)
    }
    setTimeout(timer,1000); 
}

//EJERCICIO 2: Escribe una función recursiva para encontrar el número mayor de un array.
const miArray = [];
let max = 0;
let min;
    
function llenar(){
    for (let i = 0; i < 10; i++)
    miArray.push(Math.floor(Math.random() * (101 - 1)) + 1);
    console.log(miArray);
}

function numeroMayor(i=0){
    if(miArray==""){
        llenar();
        let max=0;
        min = miArray[0];
    }
    
    if(max < miArray[i]){
        max = miArray[i];
    }
    if(min > miArray[i]){
        min = miArray[i];
    }
    if(i === miArray.length){
        console.log(`El numero mayor de este array es: ${max}`)
        console.log(`El numero menor de este array es: ${min}`)
        return;
    }else{
        i++;
        numeroMayor(i);
    }

}
//EJERCICIO 3: Escribe una función recursiva para convertir de minúscula a mayúscula el primer y último carácter de un string.
let text = "que funcion tan curiosa";
let first, last, text2;
function mayus(i=0){
    if(i == 0){
        first = text[i].toUpperCase();
    }
    if ( i == text.length-1){
        last = text[i].toUpperCase();
        text2 = first+text.slice(1,text.length-1)+last;
        console.log(`Cadena modificada: ${text2}`);
        return;
    }
    i++;
    mayus(i);
}
//EJERCICIO 4: Escribe una función recursiva para escribir la serie Fibonacci hasta su décima iteración.
let aux = 0;
let aux2 = 1;
let serie;
function Fibonacci(i=2){
  if(aux == 0 && aux2 == 1 ){
    console.log(aux);
    console.log(aux2);
  }
  serie = aux + aux2;
  aux = aux2;
  aux2 = serie;
  console.log(serie);
  if(i<9){
    i++;
    Fibonacci(i);
  }else{
    return;
  }
}
//EJERCICIO 5: Escribe una función recursiva para generar un password aleatorio con 20 caracteres combinando letras-números-símbolos-números-letras-día-new-año.
const caracteres = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    ["0","1","2","3","4","5","6","7","8","9"],
    ["!","#","$","&","/","(",")","*","+","-",".","_",","]
]
let pass="";
function ramdom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function newPassword(cont=0){
    let i = ramdom(0,caracteres.length)
    let character = caracteres[i][ramdom(0,caracteres[i].length)]
    pass += character;
    cont++;
    if(cont === 20){
        console.log(`Su nueva contraseña es: ${pass}`);
        return
    }
    newPassword(cont);
}