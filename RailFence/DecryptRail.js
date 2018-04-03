//let Ciphertext = "EANLSJCSOWEYESYNORU";
let Ciphertext = prompt("enter your Cipher text:");
let C = Ciphertext.toUpperCase().replace(/ +/g,"");
//let Rail = 8;
let Rail = parseInt(prompt("enter the rail:"));
let M=[];
let i=0; let j=0;
let k = 0; //to count char inserted to matrix
let gap= (Rail-1) + (Rail - 2);  //gap counting in first row
//gap = gap +1; // to match the index of matrix
for(i=0;i<Rail;i++){ //first row
    M[i]=[];
    for(j=0;j<C.length;j+=gap+1){
        if(i===0){
            M[i][j] = C.charAt(k);
            k++;
        }
    }
}
let count = 0; //how many char inserted in a row(divisible by 2 or not)
let skip=0;
let skip1=0; //skips according to gap
let skip2=1; //skip made after gap
for(i=1;i<Rail-1;i++){ //2nd row to 2nd last
    for(j=i;j<C.length;j+=skip+1){
            M[i][j]= C.charAt(k);
            k++;
            count++;
            if((count % 2)!==0){
                skip1 = gap - 2;
                skip = skip1;
            }
            else{
                //skip2 =i;
                skip = skip2;
            }
        
    }
    skip2+=2;
    gap = gap -2;
    count=0;
}

//for last row
gap = (Rail-1) + (Rail-2);
skip= gap;
i=Rail-1;
    for(j=i;j<C.length;j+=skip+1){
        M[i][j]= C.charAt(k);
        k++;
    }

//display plaintext
document.write(`Cipher text = ${C}` + "<br>");
document.write("Plain text = ");
let l=0; //to limit column
for(i=0;i<Rail;i++){
    for(j=l;j<C.length;j++){
        if(i===j){
            document.write(M[i][j]);
            l++;
        }
    }
}

function downToUp(){
    for(i=Rail-2;i>0;i--){
        for(j=l;j<C.length;j++){
            document.write(M[i][j]);
            l++;
            break;
        }
        
    }
    if(C.length !== l)
            upToDown();
}

function upToDown(){
    for(i=0;i<Rail;i++){
        for(j=l;j<C.length;j++){
            document.write(M[i][j]);
            l++;
            break;
        }
    }
    if(C.length !==l )
          downToUp();
}

downToUp();
upToDown();

//to display matrix
/*for(i=0;i<Rail;i++){
    for(j=0;j<C.length;j++){
        if(M[i][j]!==undefined){
            document.write(`M[${i}][${j}] = ${M[i][j]}`);
            document.write('<br>');
        }

    }
}*/