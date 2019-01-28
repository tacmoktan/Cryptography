//let Ciphertext = "QFDYMXEYRHLHCC";
let Ciphertext = prompt("enter the Ciphertext:");
let C = Ciphertext.replace(/ +/g,"").toUpperCase();
//let key = "XYZ";
let key = prompt("enter the key:"); //key is in char
key = key.toUpperCase();

let i=0; let k =0;
let output = "";
document.write(`Ciphertext : ${C} <br>`);
document.write("Plain text : ");
for(i=0;i<C.length;i++){
    let ascii = C.charCodeAt(i);
    let val = key.charCodeAt(k);


    let value = val - 65;
    let asciiVal = ascii - value ;
   // if(i===5)
     //   document.write(asciiVal);
    if(asciiVal < 65)
        asciiVal = asciiVal + 26;
    
    output = String.fromCharCode(asciiVal);
    document.write(output);

    if(k=== key.length -1)
        k=0;
    else
        k++;
}