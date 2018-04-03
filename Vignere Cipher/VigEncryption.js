//let Plaintext = "the boy has knife";
let Plaintext = prompt("enter the plaintext:");
let P= Plaintext.toUpperCase().replace(/ +/g,"");
//let key = "XYZ";
let key = prompt("enter the key: ");
key = key.toUpperCase();
let i=0;
let k=0;
let output="";

document.write(`Plaintext : ${P} <br>`);
document.write(" Ciphertext : ");
for(i=0;i<P.length;i++){
    let ascii = P.charCodeAt(i);
   // document.write(`ascii = ${ascii}`);
    let val = key.charCodeAt(k);
    //document.write(`val = ${val}`);
    let value = val - 65;
    //document.write(`value = ${value}`);
    let asciiVal = ascii + value;
    if(asciiVal > 90){
        asciiVal = asciiVal - 26;
    }
    output = String.fromCharCode(asciiVal);
    document.write(output);
   // document.write("<br>");
    if(k === key.length-1)
        k=0;
    else
        k++;

}
