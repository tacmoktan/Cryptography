let M = prompt("enter the Plain text:");
M = M.toUpperCase(); 
M = M.replace(/ +/g,"");
let K = 3;
for(let i=0;i<M.length;i++){
        let text = M.charAt(i);
        let asciiVal = text.charCodeAt();
        let pos = (asciiVal - 65 + K) % 26;
        let Ciphertext = String.fromCharCode(pos + 65);
        console.log(Ciphertext); //single char is printed at a time in loop
        document.write(Ciphertext);
}
