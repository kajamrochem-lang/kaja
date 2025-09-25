/*zad1
let naszazmienna = 4 
console.log(naszazmienna)

naszazmienna = 6

console.log(naszazmienna)
document.write("wartosci zmiennych mozemy zmieniac a stalych nie")

zad2
let a = 4 //number
console.log(typeof(a))

let b = "javascript" //string
console.log(typeof(b))

let c = "javascript" //string
console.log(typeof(c))

let d = true //bolean
console.log(typeof(d))

let e = null //null
console.log(typeof(e))

let f
console.log(typeof(f))

Zadanie3
let a = 15
let b = 4

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

Zadanie4
console.log(a%b)
console.log(a++)
console.log(a++)
console.log(b--)
console.log(b--)
console.log(-a)
console.log(+b)
console.log(2==2)
console.log(2!=2)

zadanie4
let x = 2
console.log(x)
console.log(x+=2)
console.log(x-=2)
console.log(x*=2)
console.log(x/=2)

zad5
let x = 1
console.log("przesuniecie w lewo:"+(x<<1))
console.log("przesuniecie w prawo:"+(x>>1))

zad6 IF ELSE
let x = 18
if (x==15){
    console.log("wartosc x = 15")
}else if (x<15){
    console.log("wartosc x jest mniejsza od 15")
}else {
    console.log("wartosc x jest wieksza od 15")
}

zad7
let x = 62
if (x % 2 === 0){
    console.log("liczba parzysta")
}else{
    console.log("liczba nieparzysta")
}

zad8 OPERATOR WARUNKOWY - SKROCONA INSTRUKCJA
let x = 17
const czyParzysta = (x % 2 === 0)? 'parzysta' : 'nieparzysta'
console.log(czyParzysta)

zad9 INSTUKCJA WARUNKOWA SWITCH*/
let x = 2
switch (x){
    case 1:
    case 2:
    case 3:
        if (x==1) console.log("x wyrosi 1")
        else if (x==2) console.log("x wynosi 2")
        else console.log("x wynosi 3");
        break;
    case 4:
        console.log("x wynosi 3");
        break;   
    case 5:
        console.log("x wynosi 5");
        break;
    default:
        console.log("zadna z powyzszych opcji nie zostala wybrana");
        break;
}