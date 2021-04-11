let lib = require("./lib.js");

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

function abetukeres(mondat){
    lib.betukeres(mondat, "a");
}

function randomharminc(){
    let n = 0;
    let counter=0; 

    do {
        counter++
        n = lib.randomnullaszaz();

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

// Minden átemelése a libbe :)☺☻

function main() {
    let result = randomharminc();
    console.log(result);
}

main()

















