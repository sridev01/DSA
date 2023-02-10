let n = 9;


function one(n){

let str=""
for(let i=1; i<=n; i++){
  str=str+i+" "
 //console.log(str)
}
return str
}

function two(n){
let str2= ""
for(let i=n; i>=1; i--){
  str2=str2+" "+i
//console.log(str2)
}
return str2;
}

function three(n){
  let str3=""
  for(let i=1; i<=n; i++){
    str3=str3+"  "
  }
return str3;

}

for (let i=1;i<=n;i++){
    console.log(one(i)+three(2*(n-i)+1)+two(i))
}
let str4 = "";
for(let j=1; j<=n+1; j++){
   str4+=j+" "; 
}

let str5 = ""
for(let k=n; k>=1; k--){
    str5+= k+" ";
}
 
console.log(str4+str5);