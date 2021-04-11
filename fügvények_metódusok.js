// Egysoros komment

/*
Több soros komment
bla bla bla
bla*/


// CTRL SHIFT P --> commandok
// CTRL SHIFT Ö --> terminál
// CTRL C kilép

// n = 5
// n == 5

// a = "alma"
// b = "körte"
// a + b = "almakörte"
// a + 1 = "alma1"


// d = 5
// ugyanaz d = d + 3      // 8
// ugyanaz d += 3         // 8

// 5 == 5  igaz
// 5 != 6  igaz
// 5 > 4 igaz
// 5 >= 4 igaz


/**
 * visszatér a bemenő érték négyzetével
 * @param szám
 * @return szám négyzete
 */
function negyzet(x) {
    return x * x;
}


function terulet(a, b) {
    return a * b;
}


function szohossz(n) {
//    if (condition) {
//        
//    } else if () {
//        
//    } else if () {
//
//    } else {
//        
//    }

try {

    if(n.length == undefined) throw new Error("hibabakker")

    return n.length
} catch (error) {
    console.log(error)
    return "nincsneki"
}

//    if(n.length){
//        return n.length
//    } else {
//        return "nincsneki"
//    }
}

function betukeres(mondat,betu) {

    let n = 0;
    for (let i = 0; i < mondat.length; i++) {
        let b = mondat[i];

        if(b == betu) {
            //n = n + 1
            n++;
        }
    }
    return n;
}

function abetukeres(mondat){
    betukeres(mondat, "a");
}

function randomnullaszaz() {
    // Math.random() 0.. 1 közötti töredék
    return  Math.round(Math.random() *100)
}

function randomharminc(){
    let n = 0;
    let counter=0; 

    do {
        counter++
        n = randomnullaszaz();

        console.log(n); 
        
    } while (n!=30);

    console.log(counter+". re lett meg a szám")
}


function számtobetu(n){
    return String.fromCharCode(n);
}


// ######## ######## ##          ###    ########     ###    ########  #######  ##    ## 
// ##       ##       ##         ## ##   ##     ##   ## ##      ##    ##     ## ##   ##  
// ##       ##       ##        ##   ##  ##     ##  ##   ##     ##    ##     ## ##  ##   
// ######   ######   ##       ##     ## ##     ## ##     ##    ##    ##     ## #####    
// ##       ##       ##       ######### ##     ## #########    ##    ##     ## ##  ##   
// ##       ##       ##       ##     ## ##     ## ##     ##    ##    ##     ## ##   ##  
// ##       ######## ######## ##     ## ########  ##     ##    ##     #######  ##    ## 

// 10 random szám összege
////// for 10x generálni számokat és n-hoz adjuk
// 10 karateres random szöveg generálása

// Kör terület számolása r alapján
// Kör kerület számolása r alapján 

function main() {
    let result = számtobetu(69);
    console.log(result);
}

main()

















