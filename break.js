// for loop
for (let i = 0; i < 15; i++) {
    console.log(i);
    if (i > 10) {
        break;
    }
}

// example 02 
for (let i = 0; i < 15; i++) {
    console.log(i);
    if (i >= 10) {
        break;
    }
}

// example 03
for (let i = 0; i < 150; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}
console.log('life after break up');

// while loop
let n = 54;
while (n > 25) {
    console.log(n);
    if (n < 50) {
        break;
    }
    n--;
}

let i = 54;
while (i > 25) {
   
    if (i < 50) {
        break;
    }
    console.log(i);
    i--;
}
