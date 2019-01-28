//let Plaintext = "happy new year";
let Plaintext = prompt("enter the text:");
let P = Plaintext.replace(/ +/g,"").toUpperCase();
let P1 = "";
for(let i=0;i<P.length;i+=2){ //to arrange 2 same consecutive words
   if(P[i] === P[i+1]){
        P1=P1.concat(P[i]).concat("X");
       // P1=P1.concat("X");
        P1=P1.concat(P[i+1]).concat("X");
       // P1=P1.concat("X");
    }
    else{
        P1=P1.concat(P[i]).concat(P[i+1]);
       // P1=P1.concat(P[i+1]);
    }
}
P=P1; //assigning arranged value to P
P=P.replace(undefined,"X").replace("J","I"); //to replace the J to I in plaintext
document.write(`${P} <br>`);
//let key = "black";
let key = prompt("enter the key:");
key = key.replace(/ +/g,"").toUpperCase().replace("J","I");
let key1 = ""; //new key initialized to match format for matrix

for(let p=0;p<key.length;p++){ //creating the correct format of key to insert it into the 5*5 matrix
     let a=key.indexOf(key.charAt(p));
        if(p===a){
            key1 = key1.concat(key[a]);
        }
}

let i=0;
let j=0;
let M = [];

let k = 0; //to count the key char inserted to matrix
let alphabet = "";
//let alpha = ""; // for function getAlphabet(ind)
let index = 64 ;  //to bring all chars in matrix
//let count = 0; //to count repeatition of alphabet i.e. 1

let ind =0;
//5 * 5 matrix
for(i=0;i<5;i++){
    M[i]=[];
    for(j=0;j<5;j++){
        if(k < key1.length){ //to insert all the key chars in matrix
            M[i][j]= key1[k];
            k++;
        }
        else{
            alphabet = getAlphabet();
            M[i][j] = alphabet;
            k++;
        }
    }
}

function getAlphabet(){
    let count =0;
    index +=1;
    let alpha = String.fromCharCode(index);
   if( alpha === "J"){
       return getAlphabet();
    }
    
    for(let l=0;l<key1.length;l++){
                if( alpha === key1[l] ){
                    count++;
                }
    }
    if(count > 0){
           return getAlphabet();  // return is used to fix error 'undefined' since smthg should be returned to alphabet above
            //document.write(alpha + "<br>");
    }
    else{
        return alpha;
    }    
 
}
//conversion to cipher text
let c=[]; let d=[]; //to get indexes of each char
k=-1;
let i1,j1; //to index the final characters
for(let x=0;x<(P.length)/2;x++){
    c = conversion(); //first letter's index
    d = conversion();   //second letter's index
    // 0 -> row and 1 -> column
    if(c[1] !== d[1]){   //first letter's col is greater
        if(c[0] !==d[0]){
        //document.write(c[0]);  
        //document.writeln(d[1]);
      //  document.write( M[c[0]][d[1]] );

        numToChar(c[0],d[1]);
       // document.write(d[0]);
       // document.writeln(c[1]);

      //  document.writeln( M[d[0]][c[1]] );
        numToChar(d[0],c[1]);
        }

        if(c[0]===d[0]){ //same row
            sameRow();
        }
    }
  /*  else if(c[1]<d[1]){   //second letter's col is greater //performs same as above
        if(c[0] !== d[0]){
           // document.write(c[0]);
           // document.writeln(d[1]);
            numToChar(c[0],d[1]);

           // document.write(d[0]);
           // document.writeln(c[1]);
            numToChar(d[0],c[1]);
        }
        if(c[0] ===d[0])
            sameRow();
       
    }*/
    else if (c[1]===d[1]){ //same column
       // c[0] = c[0]+1;
      //  document.write(c[0]);
       // document.writeln(c[1]);
        if(c[0]===4){
            c[0]=0;
        }else{
            c[0]= c[0] +1;
        }
        numToChar(c[0],c[1]);
        // d[0] = d[0] +1;
      //  document.write(d[0]);
      //  document.writeln(d[1]);
        if(d[0]===4){
            d[0]=0;
        }else{
            d[0]=d[0]+1;
        }
        numToChar(d[0],d[1]);
    }
    
}
function conversion(){ //returning index of a letter
    k++;
    let a = P.charAt(k); //assigning letter
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(M[i][j] === a)    //checking whether the matrix has a matching letter with 'a'
                return [i,j];
        }  
    }
}

function sameRow(){
    if(c[1]===4){
       // document.write('inside the c1 = 4');
        c[1]=0;   //for circular movement
      //  document.write(c[0]);
      //  document.writeln(c[1]);
        numToChar(c[0],c[1]);
    }
    else{
        c[1]= c[1] +1;
       // document.write(c[0]);
       // document.writeln(c[1]);
        numToChar(c[0],c[1])
    }    
    
    if(d[1]===4){
       // document.write('inside the d1=4');
        d[1]=0;     //for circular movement
      //  document.write(d[0]);
      //   document.writeln(d[1]);
         numToChar(d[0],d[1]);
    }
    else{
        d[1] = d[1] +1;
       // document.write(d[0]);
       // document.writeln(d[1]);
       numToChar(d[0],d[1]);
    }  
 
}



function numToChar(i1,j1){
             document.write(M[i1][j1]);
}
//document.write(inda + "<br>" + indb + "<br>");
document.write("<br>");
 //display matrix
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        document.write(`  M[${i}][${j}] = ${M[i][j]}  `);
    }
    document.write("<br>");
}
