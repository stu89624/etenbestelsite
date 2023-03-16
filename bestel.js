// variabelen met de totaalprijs van alles
let tompouceGele = 2.65;
let slagroomtaart = 23.75;
let tompouceSlagroom = 2.65;
let MarsepeinAardbeiCakegebak = 2.65;
let NougatZandgebakje = 2.65;
let CardinaleGebak = 2.65;
let MarsepeinAdvocaatCakegebak = 2.65;
let Slagroompunt = 2.80;
let Vruchtentaart = 23.75;
let Chocoladepunt  = 2.80;
let Bananensoes = 2.65;
let Chipolatataart = 23.75;

// Initializeren van prijzen, aantal producten, foto's en namen

// tompouceGele = 0
// slagroomtaart = 1
// tompouceSlagroom = 2
// MarsepeinAardbeiCakegebak = 3
// NougatZandgebakje = 4
// CardinaleGebak = 5
// MarsepeinAdvocaatCakegebak = 6
// Slagroompunt = 7
// Vruchtentaart = 8
// Chocoladepunt = 9
// Bananensoes = 10
// Chipolatataart = 11

const totaalPrijzen = [2.65, 23.75, 2.65, 2.65, 2.65, 2.65, 2.65, 2.80, 23.75, 2.80, 2.65, 23.75];
let totaalProducten = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const totaalPersonen = [1, 9, 1, 1, 1, 1, 1, 9, 1, 1, 9];
const fotos = ['media/cake1.png', 'media/cake2.png', 'media/cake3.png','media/cake4.png', 'media/cake5.png', 'media/cake6.png','media/cake7.png', 'media/cake8.png', 'media/cake9.png','media/cake10.png', 'media/cake11.png', 'media/cake12.png'];
const naam = ['Tompouce Gele Room', 'Kinder marsepein-slagroomtaart', 'Tompouce slagroom', 'Marsepein Aardbei Cakegebak', 'NougatZandgebakje', 'Cardinale Gebak', 'Marsepein Advocaat Cakegebak', 'Slagroompunt', 'Vruchtentaart', 'Chocoladepunt', 'Bananensoes', 'Chipolatataart'];
let winkelmandjeTotaal = 0

// om aantal te kunnen tellen begint het bij 0
let aantal_tompouceGele = 0;
let aantal_slagroomtaart = 0;
let aantal_tompouceSlagroom = 0;
let aantal_MarsepeinAardbeiCakegebak = 0;
let aantal_NougatZandgebakje = 0;
let aantal_CardinaleGebak = 0;
let aantal_MarsepeinAdvocaatCakegebak = 0;
let aantal_Slagroompunt = 0;
let aantal_Vruchtentaart = 0;
let aantal_Chocoladepunt  = 0;
let aantal_Bananensoes = 0;
let aantal_Chipolatataart = 0;

//totaal //WIP//////////////////
let Tot_slagroomtaart;

// functies die eerst de id leeg maken voordat er een foto wordt laten zien. zo is het nooit double
function clearall() {
    document.getElementById("foto").innerHTML = " ";
}
function clearall1() {
    document.getElementById("foto1").innerHTML = " ";
}
function clearall2() {
    document.getElementById("foto2").innerHTML = " ";
}
function clearall3() {
    document.getElementById("foto3").innerHTML = " ";
}
function clearall4() {
    document.getElementById("foto4").innerHTML = " ";
}
function clearall5() {
    document.getElementById("foto5").innerHTML = " ";
}

//
function Product(gebak) {

    // if (gebak == 'tompouceGele') {
    //          aantal_tompouceGele++;
    //     clearall()
    //     let tompouceGeleFoto = document.createElement("img");
    //     tompouceGeleFoto.src = fotos[0];
    //     document.getElementById("foto").appendChild(tompouceGeleFoto);

    //     document.getElementById("naam").innerHTML = naam[0];

    //     document.getElementById("stuks").innerHTML = aantal_tompouceGele;

    //     document.getElementById("personen").innerHTML = aantal_tompouceGele;

    //     let prijs_tompouceGele = aantal_tompouceGele * tompouceGele;
    //     document.getElementById("prijsstuks").innerHTML = prijs_tompouceGele.toFixed(2);

    // }
    // +1 aan het product.
    totaalProducten[gebak]++;

    //Winkelmandje updaten met nieuw item
    const winkelwagenElement = document.getElementById("tableMandjeId");
    let row = winkelwagenElement.insertRow(-1);
    row.setAttribute("id", "winkelwagenId" + gebak)
    let foto = row.insertCell(0);
    let naam = row.insertCell(1);
    let stuks = row.insertCell(2);
    let personen = row.insertCell(3);
    let prijsstuks = row.insertCell(4);

    const fotoElement = document.createElement("img");
    fotoElement.src = fotos[gebak];
    fotoElement.setAttribute("id", "foto");
    winkelwagenElement.appendChild(fotoElement);
    
    foto.innerHTML = fotoElement;
    naam.innerHTML = naam[gebak];
    stuks.innerHTML = totaalProducten[gebak];
    personen.innerHTML = totaalPersonen[gebak] * 9;
    prijsstuks.innerHTML = totaalPersonen[gebak] / totaalPrijzen[gebak].toFixed(2);

//     if (gebak == 'slagroomtaart') {
//         aantal_slagroomtaart++;
//         clearall1()
//         let slagroomtaartFoto = document.createElement("img");
//         slagroomtaartFoto.src = fotos[1];
//         document.getElementById("foto1").appendChild(slagroomtaartFoto);

//         document.getElementById("naam1").innerHTML = naam[1];
//         // aantal stuks
//         document.getElementById("stuks1").innerHTML = aantal_slagroomtaart;
//         //aantal personen 
//         let slagroomtaartPersoon = aantal_slagroomtaart * 9;
//         document.getElementById("personen1").innerHTML = slagroomtaartPersoon;
//         // totaal prijs
//         let Tot_slagroomtaart = aantal_slagroomtaart  * slagroomtaart;
//         // prijs per persoon
//         let PersoonPrijs_slagroomtaart = Tot_slagroomtaart / slagroomtaartPersoon;
//         document.getElementById("prijsstuks1").innerHTML = PersoonPrijs_slagroomtaart.toFixed(2);

//     }

//     if (gebak == 'tompouceSlagroom') {
//         aantal_tompouceSlagroom++;
//         clearall2()
//         let tompouceSlagroomFoto = document.createElement("img");
//         tompouceSlagroomFoto.src = fotos[2];
//         document.getElementById("foto2").appendChild(tompouceSlagroomFoto);

//         document.getElementById("naam2").innerHTML = naam[2];

//         document.getElementById("stuks2").innerHTML = aantal_tompouceSlagroom;

//         document.getElementById("personen2").innerHTML = aantal_tompouceSlagroom;

//         let prijs_tompouceSlagroom = aantal_tompouceSlagroom * tompouceSlagroom;
//         document.getElementById("prijsstuks2").innerHTML = prijs_tompouceSlagroom.toFixed(2);
//     }


//     if (gebak == 'MarsepeinAardbeiCakegebak') {
//         aantal_MarsepeinAardbeiCakegebak++;
//         clearall3()
//         let MarsepeinAardbeiCakegebakFoto = document.createElement("img");
//         MarsepeinAardbeiCakegebakFoto.src = fotos[3];
//         document.getElementById("foto3").appendChild(MarsepeinAardbeiCakegebakFoto);

//         document.getElementById("naam3").innerHTML = naam[3];

//         document.getElementById("stuks3").innerHTML = aantal_MarsepeinAardbeiCakegebak;

//         document.getElementById("personen3").innerHTML = aantal_MarsepeinAardbeiCakegebak;

//         let prijs_MarsepeinAardbeiCakegebak = aantal_MarsepeinAardbeiCakegebak * MarsepeinAardbeiCakegebak;
//         document.getElementById("prijsstuks3").innerHTML = prijs_MarsepeinAardbeiCakegebak.toFixed(2);

//     }

//     if (gebak == 'NougatZandgebakje') {
//         aantal_NougatZandgebakje++;
//         clearall4()
//         let NougatZandgebakjeFoto = document.createElement("img");
//         NougatZandgebakjeFoto.src = fotos[4];
//         document.getElementById("foto4").appendChild(NougatZandgebakjeFoto);

//         document.getElementById("naam4").innerHTML = naam[4];

//         document.getElementById("stuks4").innerHTML = aantal_NougatZandgebakje;

//         document.getElementById("personen4").innerHTML = aantal_NougatZandgebakje;

//         let prijs_NougatZandgebakje = aantal_NougatZandgebakje * NougatZandgebakje;
//         document.getElementById("prijsstuks4").innerHTML = prijs_NougatZandgebakje.toFixed(2);

//     }

//     if (gebak == 'CardinaleGebak') {
//         aantal_CardinaleGebak++;
//         clearall5()
//         let CardinaleGebakFoto = document.createElement("img");
//         CardinaleGebakFoto.src = fotos[5];
//         document.getElementById("foto5").appendChild(CardinaleGebakFoto);

//         document.getElementById("naam5").innerHTML = naam[5];

//         document.getElementById("stuks5").innerHTML = aantal_CardinaleGebak;

//         document.getElementById("personen5").innerHTML = aantal_CardinaleGebak;

//         let prijs_CardinaleGebak = aantal_CardinaleGebak * CardinaleGebak;
//         document.getElementById("prijsstuks5").innerHTML = prijs_CardinaleGebak.toFixed(2);

//     }

//     if (gebak == 'MarsepeinAdvocaatCakegebak') {
//         aantal_MarsepeinAdvocaatCakegebak++;
//         clearall()
//         let MarsepeinAdvocaatCakegebakFoto = document.createElement("img");
//         MarsepeinAdvocaatCakegebakFoto.src = fotos[6];
//         document.getElementById("foto").appendChild(MarsepeinAdvocaatCakegebakFoto);

//         document.getElementById("naam").innerHTML = naam[6];

//         document.getElementById("stuks").innerHTML = aantal_MarsepeinAdvocaatCakegebak;

//         document.getElementById("personen").innerHTML = aantal_MarsepeinAdvocaatCakegebak;

//         let prijs_MarsepeinAdvocaatCakegebak = aantal_MarsepeinAdvocaatCakegebak* MarsepeinAdvocaatCakegebak;
//         document.getElementById("prijsstuks").innerHTML = prijs_MarsepeinAdvocaatCakegebak.toFixed(2);

//     }

//     if (gebak == 'Slagroompunt') {
//         aantal_Slagroompunt++;
//         clearall1()
//         let SlagroompuntFoto = document.createElement("img");
//         SlagroompuntFoto.src = fotos[7];
//         document.getElementById("foto1").appendChild(SlagroompuntFoto);

//         document.getElementById("naam1").innerHTML = naam[7];

//         document.getElementById("stuks1").innerHTML = aantal_Slagroompunt;

//         document.getElementById("personen1").innerHTML = aantal_Slagroompunt;

//         let prijs_Slagroompunt = aantal_Slagroompunt * Slagroompunt;
//         document.getElementById("prijsstuks1").innerHTML = prijs_Slagroompunt.toFixed(2);

//     }

// if (gebak == 'Vruchtentaart') {
//     aantal_Vruchtentaart++;
//     clearall2()
//     let VruchtentaartFoto = document.createElement("img");
//     VruchtentaartFoto.src = fotos[8];
//     document.getElementById("foto2").appendChild(VruchtentaartFoto);

//     document.getElementById("naam2").innerHTML = naam[8];
//     // aantal stuks
//     document.getElementById("stuks2").innerHTML = aantal_Vruchtentaart;
//     //aantal personen 
//     let VruchtentaartPersoon = aantal_Vruchtentaart * 9;
//     document.getElementById("personen2").innerHTML = VruchtentaartPersoon;
//     // totaal prijs
//     let Tot_Vruchtentaart = aantal_Vruchtentaart * Vruchtentaart;
//     // prijs per persoon
//     let PersoonPrijs_Vruchtentaart = Tot_Vruchtentaart / VruchtentaartPersoon;
//     document.getElementById("prijsstuks2").innerHTML = PersoonPrijs_Vruchtentaart.toFixed(2);
// }

// if (gebak == 'Chocoladepunt') {
//     aantal_Chocoladepunt++;
//     clearall3()
//     let ChocoladepuntFoto = document.createElement("img");
//     ChocoladepuntFoto.src = fotos[9];
//     document.getElementById("foto3").appendChild(ChocoladepuntFoto);

//     document.getElementById("naam3").innerHTML = naam[9];

//     document.getElementById("stuks3").innerHTML = aantal_Chocoladepunt;

//     document.getElementById("personen3").innerHTML = aantal_Chocoladepunt;

//     let prijs_Chocoladepunt = aantal_Chocoladepunt * Chocoladepunt;
//     document.getElementById("prijsstuks3").innerHTML = prijs_Chocoladepunt.toFixed(2);

// }

// if (gebak == 'Bananensoes') {
//     aantal_Bananensoes++;
//     clearall4()
//     let BananensoesFoto = document.createElement("img");
//     BananensoesFoto.src = fotos[10];
//     document.getElementById("foto4").appendChild(BananensoesFoto);

//     document.getElementById("naam4").innerHTML = naam[10];

//     document.getElementById("stuks4").innerHTML = aantal_Bananensoes;

//     document.getElementById("personen4").innerHTML = aantal_Bananensoes;

//     let prijs_Bananensoes = aantal_Bananensoes * Bananensoes;
//     document.getElementById("prijsstuks4").innerHTML = prijs_Bananensoes.toFixed(2);

// }

// if (gebak == 'Chipolatataart') {
//     aantal_Chipolatataart++;
//     clearall5()
//     let ChipolatataartFoto = document.createElement("img");
//     ChipolatataartFoto.src = fotos[11];
//     document.getElementById("foto5").appendChild(ChipolatataartFoto);

//     document.getElementById("naam5").innerHTML = naam[11];
//     // aantal stuks
//     document.getElementById("stuks5").innerHTML = aantal_Chipolatataart;
//     //aantal personen 
//     let ChipolatataartPersoon = aantal_Chipolatataart * 9;
//     document.getElementById("personen5").innerHTML = ChipolatataartPersoon;
//     // totaal prijs
//     let Tot_Chipolatataart = aantal_Chipolatataart  * Chipolatataart;
//     // prijs per persoon
//     let PersoonPrijs_Chipolatataart = Tot_Chipolatataart / ChipolatataartPersoon;
//     document.getElementById("prijsstuks5").innerHTML = PersoonPrijs_Chipolatataart.toFixed(2);
// }

}

function totaal() {

document.getElementById("totaal").innerHTML = Tot_slagroomtaart;
    
}