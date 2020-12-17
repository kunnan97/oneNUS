export const firebaseConfig = {
    apiKey: "AIzaSyDTKTjOBknWxFUXAkTeAuEMylj1cBciYgk",
    authDomain: "onenusv1.firebaseapp.com",
    databaseURL: "https://onenusv1.firebaseio.com",
    projectId: "onenusv1",
    storageBucket: "onenusv1.appspot.com",
    messagingSenderId: "376832047818",
    appId: "1:376832047818:web:c36a62357fde1de2f8d233"
};

export const convertToFirestore = (busStop) => {
    switch (busStop) {
        case "UHC":
        case "OPP UHC":
            return "a UHC";
        case "KR MRT":
        case "OPP KR MRT":
            return "b KR MRT";
        case "UHALL":
        case "OPP UHALL":
            return "c UHall";
        case "S 17":
        case "LT 27":
            return "d Science";
        case "YIH":
        case "OPP YIH":
            return "e YiH";
        case "RAFFLES HALL":
        case "MUSEUM":
            return "f Raffles Hall";
        case "CLB" :
        case "IT":
            return "g CLB";
        case "LT 13": 
        case "VENTUS":
            return "h Eusoff FASS";
        case "OPP NUSS": 
        case "AS 5":
            return 'i Temasek';
        case "OPP HSSML":
        case "BIZ 2":
            return "j BIZ";
        case "TCOMS": 
        case "OPP TCOMS":
            return "k TCOMS";
        case "PGP HSE 15": 
        case "PGP HSE 7":
            return "l PGP Hse";
        case "PGP": 
        case "PGP R":
            return "m PGP Terminal";
        case "THE JAP SCH": 
        case "EA":
            return "n Jap Sch";
        case "COLLEGE GREEN": 
        case "BOTANIC GARDEN MRT":
            return "o Botanic";
        case "OTH BUILDING":
            return "p OTH Building";
        case "UTOWN":
            return "q UTown";
        case "KV":
            return "r KV";
        case "KR BUS TERMINAL":
            return "s KR Bus Terminal";
        case "COM 2":
            return "t Com 2";
        default:
            return " ";
    };
};