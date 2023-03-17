const billetregister= [];

function registerBillet() {

    let film = document.getElementById("Filmer").value;
    let antall = document.getElementById("Antall").value;
    let fornavn = document.getElementById("Fornavn").value;
    let etternavn = document.getElementById("Etternavn").value;
    let telefonnr = document.getElementById("Telefonnr").value;
    let epost = document.getElementById("E-Post").value;

    document.getElementById("feilAntall").innerHTML ="";
    document.getElementById("feilFornavn").innerHTML ="";
    document.getElementById("feilEtternavn").innerHTML ="";
    document.getElementById("feilTelefonnr").innerHTML ="";
    document.getElementById("feilE-Post").innerHTML ="";
    let riktigiginput = new Boolean();

    if(antall == null || antall == "" ) {
        riktigiginput = (false);
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall.";
        document.getElementById("Antall").value="";
    }
    if(fornavn == null || antall == "" ) {
        riktigiginput = (false);
        document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavnet.";
        document.getElementById("Fornavn").value="";
    }

    if(etternavn == null || antall == "" ) {
        riktigiginput = (false);
        document.getElementById("feilEtternavn").innerHTML = "Må skrive noe inn i etternavnet.";
        document.getElementById("Etternavn").value="";
    }
    if(telefonnr == null || antall == "" ) {
        riktigiginput = (false);
        document.getElementById("feilTelefonnr").innerHTML = "Må skrive noe inn i telefon nr.";
        document.getElementById("Fornavn").value="";
    }

    if(epost == null || antall == "" ) {
        riktigiginput = (false);
        document.getElementById("feilE-Post").innerHTML = "Må skrive noe inn i e-post.";
        document.getElementById("E-Post").value="";
    }

    if(riktigiginput){

        const billett = {
            film : film,
            antall : antall,
            fornavn : fornavn,
            etternavn : etternavn,
            telefonnr : telefonnr,
            epost : epost,
        }


        billetregister.push(billett);

        document.getElementById("Antall").value="";
        document.getElementById("Fornavn").value="";
        document.getElementById("Etternavn").value="";
        document.getElementById("Telefonnr").value="";
        document.getElementById("E-Post").value="";
        document.getElementById("Filmer").selectedIndex = "0";

        alleBilletter();
    };
}
function alleBilletter() {
    let ut = "<table><tr><th>Filmer</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>E-Post</th></tr>";

    for (let b of billetregister) {
        ut += "<tr>";
        ut += "<td>" + b.film + "</td> <td>"
            + b.antall + "</td> <td>"
            + b.fornavn + "</td> <td>"
            + b.etternavn + "</td> <td>"
            + b.telefonnr + "</td> <td>"
            + b.epost + "</td> <td>"
        ut += "</tr>";
    }
    document.getElementById("alleBilleter").innerHTML = ut;
}

function slettBilletter(){
    billetregister.length = 0;
    document.getElementById("alleBilleter").innerHTML = "";
}