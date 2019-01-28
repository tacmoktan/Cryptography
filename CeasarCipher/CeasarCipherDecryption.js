let Ciphertext = prompt("enter the Cipher text:");
//let Ciphertext = "WKHBZ LOO DWWDFN";
let C = Ciphertext.toUpperCase();
C = C.replace(/ +/g,"");
//let K = 3;
let K = parseInt(prompt("enter the key"));
for(let i=0;i<C.length;i++){
        let text = C.charAt(i);
       let ascii = text.charCodeAt();
       let Cipher = ascii - 65;
       let pos = (Cipher + 26 - K) % 26;
       let Plaintext = String.fromCharCode(pos + 65);
       console.log(Plaintext);   //single char is printed at a time in loop
       document.write(Plaintext) ;
}