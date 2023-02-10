
let a = [5, 7, 15, 35, 68, 70, 700, 500];
let max = a[0];

for(i=0; i<a.length;i++){
    if (max < a[i]){
        max = a[i]

    }
}

console.log(max);

// minimun
let b = [5, 7, 15, 35, 68, 70, -120, -980];
let min = b[0];

for(i=1; i<a.length;i++){
    if (min > b[i]){
        min = b[i]

    }
    
}

console.log(min);