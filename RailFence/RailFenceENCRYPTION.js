//let Plaintext = "enjoy your new classes";
let Plaintext = prompt("enter your plain text:");
let P = Plaintext.toUpperCase().replace(/ +/g,""); //no. of characters = columns
document.write(`Plain text : ${P}`);
//let Rail = 8; //rows
let Rail = parseInt(prompt("enter the Rail:"));
let i=0; let j=0;
let k=0;//to increase val of j
let M = [];
for(i=0;i<Rail;i++){
   // M[i] = new Array(P.length); //bad practice
    M[i]=[];
    for(j=k;j<P.length;j++){
        if(i === j){
            M[i][j]= P.charAt(j);
            k +=1; // k counts the no. of character inserted
            //document.write(M[i][j]);
         } 
    }
}
function downToUp(){
    for(i = Rail-2;i>0;i--){
        for(j=k; j< P.length;j++){
            M[i][j] = P.charAt(j);
            k+=1;
            //document.write(M[i][j]);
            break;
        }
    }
    if( k === P.length){
        console.log(k);
    }else{
       upToDown();
    }
}
function upToDown(){   
    for(i=0;i<Rail;i++){
        for(j=k; j< P.length;j++){
            M[i][j] = P.charAt(j);
            k+=1;
           //document.write(M[i][j]);
            break;
        }
    }
    if( k === P.length){
        console.log(k);
   }else{
        downToUp();
   }
}
downToUp();
document.write("Ciphertext:");
for( i=0;i<Rail;i++){
    for(j=0;j<P.length;j++){
        if(M[i][j] !== undefined){
            document.write(M[i][j]);
        }
    }
}
