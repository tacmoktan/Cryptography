class HC {
    constructor(){
        this.key="hillclimbinghere";  //key
        this.PT="short example";  //plaintext
    }
    operation() {
       let k = this.key;
       let p =this.PT; //to assign plaintext
      
       k = k.toUpperCase();
       let r=0; //counts rows to be traversed
       for(let i=0;i<k.length;i++){
           if( Math.pow(i,2)===k.length){
                console.log("key valid");
                r=i;
                p = p.replace(/ +/g,"").toUpperCase();
                if(p.length%r===0)
                    console.log("plaintext valid");
                else
                    console.log("plaintext invalid");
                break;
           }
           else
             console.log('key invalid');
        }  
        //creating key matrix
        document.write(`key = ${k}  <br>`);
        let KM=[];
        let count=0;
        for(let i=0;i<r;i++){
            KM[i]=[];
            for(let j=0;j<r;j++){
                let ascii =k.charCodeAt(count); //
                let val = ascii-65;
                KM[i][j]= val;
                count++;
            }
        }   
        //creating plaintext matrix
        document.write(`Plaintext = ${p} <br>`);
        let PM = []; //array for plaintext
        count=0;
        let CM = []; //ciphertext matrix
       document.write("Ciphertext =");
       for(let i=0;i<(p.length/r);i++){
           let Ciphertext = plainMatrix();
           document.write(Ciphertext);
        }
        document.write("<br>");
        function plainMatrix(){
            for(let i=0;i<r;i++){
                PM[i]=[];
                for(let j=0;j<1;j++){
                    let ascii = p.charCodeAt(count);
                    let val = ascii - 65;
                    PM[i][j]= val;
                    count++;
                }
            }
            //initializing Ciphertext matrix with 0 in each position
           for(let i=0;i<r;i++){ 
                CM[i]=[];
                for(let j=0;j<1;j++){
                   CM[i][j]=0;
                }
            }
            for(let i=0;i<r;i++){ //matrix multiplication
                for(let j=0;j<r;j++){
                    for(let k=0;k<r;k++){
                        if(PM[i][j]!==NaN)
                            CM[i][j]+= KM[i][k]*PM[k][j];
                    }
                }
            }
          /*  for(let i=0;i<r;i++){ to check CipherMatrix before converting to strings
                for(let j=0;j<1;j++){
                    document.write(`CM[${i}][${j}] = ${CM[i][j]}`);
                }
                document.write("<br>");
            }
            */let Ciphertext="";
            for(let i=0;i<r;i++){
                for(let j=0;j<1;j++){
                     let x = CM[i][j]%26; //MOD 26 remainder calculation
                     CM[i][j]=String.fromCharCode(x+65);
                     let a = CM[i][j]; //since concat doesn't take array , assign char value to new variable
                     Ciphertext = Ciphertext.concat(a);
                }
            }
           // document.write(Ciphertext+"<br>");
           return Ciphertext;

        }  //plaintext function ends here

        //to display key matrix
        document.write(`key matrix <br>`);
       for(let i=0;i<r;i++){
            for(let j=0;j<r;j++){
               document.writeln(`KM[${i}][${j}] = ${KM[i][j]}`);       
            }
            document.write("<br>");
        }
        document.write("<br>");
        //to display plaintext matrix
        document.write(`plaintext matrix <br>`);
        for(let i=0;i<r;i++){
            for(let j=0;j<1;j++){
                document.writeln(`PM[${i}][${j}] = ${PM[i][j]}`);
            }
            document.write("<br>");
        }
    
    }
    
}
const obj1 = new HC();
obj1.operation();