/* Print odds 1-20 */
for (var i=1; i<21 ; i++) {
    if (i % 2 !==0) {
        console.log(i)
    }
}


/* Decreasing Multiples of 3 */
for (i = 100; i > -1; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}


/* Print the sequence */
for (i = 4; i > -4; i -= 1.5) {
    console.log (i)
}


/* Sigma */
var sum = 0;
for (i = 1; i < 101; i++) {
    sum = sum + i;
    console.log(sum);
}


/* Factorial */
var product = 1;
for (i = 1; i < 13; i++) {
    product = product * i;
    console.log(product);
}