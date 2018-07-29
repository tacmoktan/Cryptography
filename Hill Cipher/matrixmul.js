let a=[(7,8),(11,11)];
let b=[18,7];
let c=[[1,2],[3,4]];
let d=[[3,2],[1,4]];
let CM=[];

for(let i =0;i<2;i++){
    CM[i]=[];
    for(let j=0;j<2;j++){
        CM[i][j]=0;
    }
}
for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){
        for(let k=0;k<2;k++){
            CM[i][j]+=c[i][k]*d[k][j];
        }
    }
}

for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){
        document.write(`CM[${i}][${j}] = ${CM[i][j]}`);
    }
    document.write("<br>");
}