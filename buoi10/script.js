//tinh va in bang cuu chuong
function BCC() {
    for (let i = 1; i <= 9; i++){
        for (let j = 1; j <= 9; j++){
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}
BCC();

//Fizz, Buzz, FizzBuzz, BizzFuzz
for (let i = 0; i <= 100; i++){
    if (i % 3 == 0) {
        console.log(`${i} fizz`);
    }
    if (i % 5 == 0) {
        console.log(`${i} buzz`);
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} fizzbuzz`)
    }
    if (i % 3 != 0 && i % 5 != 0)
        console.log(`${i} bizzfuzz`)
}
//tong boi chung cua 3 va 5 trong khoang 0-1000
let sum = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);

//kiem tra va in ra 1 so co phai so nguyen to hay ko
function prime(n) {
    let check = true;
    for (i = 2; i < n; i++){
        if (n % i == 0) {
            check = false;
        }
    }
    check
        ? console.log(n + " la so nguyen to")
        : console.log(n + " khong phai so nguyen to");
}
prime()

//kiem tra va in ra cac so nguyen to 0-1000
function prime(n) {
    let check = true;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        check = false;
      }
    }
  
    if (check == true) {
        console.log(n + " là số nguyên tố")
    }
  }
  
  function printPrime(n = 1000) {
    for (let i = 0; i <= n; i++) {
      prime(i);
    }
}
printPrime(1000);

//Kiem tra va in cac so nguyen to trong khoang a-b
function prime(n) {
    let check = true;
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            check = false;
        }
    }
    if (check == true) {
        console.log(n + " la so nguyen to")
    }
}
function printPrime(a,b) {
    for (i = a; i <= b; i++){
        prime(i)
    }
}
printPrime(100, 200);

//in bang cuu chuong nguoc tu 10-1
for (let i = 9; i > 0; i--){
    for (let j = 9; j > 0; j--){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}


//in ra dau cuoi cua 1 so

function display_digit(number) {
    let last_digit = number%10;

    let first_digit = number;
    while (first_digit >=10){
        first_digit =(first_digit-(first_digit%10))/10;
        
    }
    console.log("chữ số đầu tiên của : " + number + " là : " + first_digit);
    console.log("chữ số cuối củng của : " + number + " là : " + last_digit);
}
display_digit(1234);

