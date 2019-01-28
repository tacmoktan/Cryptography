class PlayFair{
    constructor(P,key){
        this._P = P;
        this._key = key;
    }
    set plaintext(P){
        document.write(P);

        let P1="";
        for(let i=0;i<P.length;i+=2){ //to arrange 2 same consecutive words
            if(P[i] === P[i+1]){
                P1=P1.concat(P[i]).concat("X");
                P1=P1.concat(P[i+1]).concat("X");
            }else{
                P1=P1.concat(P[i]).concat(P[i+1]);
            }
        }
        P=P1; //assigning arranged value to P
        P=P.replace("J","I"); //to replace the J to I in plaintext
        this._P = P;
        document.write("after set: <br>");
        document.write(this._P + "<br>");
    }
    set keyfun(key){
        document.write(key);
        let key1 = ""; //new key initialized to match format for matrix
        for(let p=0;p<key.length;p++){ //creating the correct format of key to insert it into the 5*5 matrix
            let a=key.indexOf(key.charAt(p));
                if(p===a){
                    key1 = key1.concat(key[a]);
                }
        }
        this._key = key1;
        document.write("after set: <br>");
        document.write(this._key + "<br>");
    }
    initialization() {
        //document.write("inside initialization");
       
    }

}

let Plaintext = "Happy new year";
let P = Plaintext.replace(/ +/g,"").toUpperCase();

let key = "Black";
key = key.replace(/ +/g,"").toUpperCase();
const obj1 = new PlayFair(P,key);
obj1.plaintext = prompt("enter plaintext");
obj1.keyfun = prompt("enter key");

