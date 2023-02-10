let n = 4;

function space(n){
    let str = ""
    for(let i=1; i<=n; i++){
        str=str+"  ";
    }
    return str;
}

for (let i=1; i<=n; i++){
    console.log(space(i-1)+i)
}

for(let j=n-1; j>=1; j--){
    console.log(space(n-j+(n-1))+j)
}


