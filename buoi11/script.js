// 1. viet ham random(a,b), tra ve so ngau nhien trong khoang a-b
//normal
let random = function (a, b) {
    if (a >= b) {
        return console.log("khong co gia tri")
    }
    for (let i = 1; i < (b - a); i++){
        a = i + a;  
    }
    console.log(a);
}
random(10, 30)
//arrow
let random = (a, b) => {
    if (a >= b) {
        return console.log("khong co gia tri")
    }
    for (let i = 1; i < (b - a); i++){
        a = i + a;
    }
    console.log(a);
}
random(10, 30)

// 2. Viet ham isTriangle(a,b,c) nhan vao 3 tham so la 3 canh cua 1 tam giac, kiem tra co hop le ko
//normal
let isTriangle = function (a, b, c) {
    if (a + b > c && a + c > b && b + a > a) {
        console.log(`${a},${b},${c} la 3 canh cua tam giac`)
    }
    else {
        console.log(`${a},${b},${c} khong phai 3 canh cua tam giac`)
    }
}
isTriangle(1,2,3)
isTriangle(3,5,6)
//arrow
let isTriangle =  (a, b, c) => {
    if (a + b > c && a + c > b && b + a > a) {
        console.log(`${a},${b},${c} la 3 canh cua tam giac`)
    }
    else {
        console.log(`${a},${b},${c} khong phai 3 canh cua tam giac`)
    }
}
isTriangle(1,2,3)
isTriangle(3, 5, 6)


// 3. GuessNumber
//normal
let guessNumber = function (n) {
    let a = 0;
    let random = () => {
        for (let i = 1; i <10; i++){
            a = i;
        }
        console.log(`random ${a}`);
    }
    random()
       
    n = +prompt("doan so bat ky");
    if (n == a) {
        return console.log("A may zing, gut chop ");  
    }
    else {
        console.log("Khong Khop")
        n = +prompt("doan so bat ky")
        console.log("Khong Khop")
        n = +prompt("doan so bat ky")
        console.log("Khong Khop")
    }
}
guessNumber();
//arrow
let guessNumber = (n) => {
    let a = 0;
    let random = () => {
        for (let i = 1; i <10; i++){
            a = i;
        }
        console.log(`random ${a}`);
    }
    random()
       
    n = +prompt("doan so bat ky");
    if (n == a) {
        return console.log("A may zing, gut chop ");  
    }
    else {
        console.log("Khong Khop")
        n = +prompt("doan so bat ky")
        console.log("Khong Khop")
        n = +prompt("doan so bat ky")
        console.log("Khong Khop")
    }
}
guessNumber();

// 4. viet ham nearest(a,b), kiem tra tra ve so gan nhat voi 100
//normal
let nearest = function (a, b) {
    if (a < b < 100) {
        return b
    }
    if (100 < a < b){
        return a
    }
    if (a < 100 < b) {
        if ((100 - a) < (b - 100)) {
            return a
        }
        return b
    }
}
nearest(55, 75);
//arrow
let nearest = (a, b) => {
    if (a < b < 100) {
        return b
    }
    if (100 < a < b){
        return a
    }
    if (a < 100 < b) {
        if ((100 - a) < (b - 100)) {
            return a
        }
        return b
    }
}
nearest(55, 75);

// 5. viet ham sequense(a,b,c) kiem tra xem a,b,c co tang dan hoac giam dan khong
//normal
let sequense = function (a, b, c) {
    if (a < b &&  b < c) {
       return console.log(`${a}, ${b}, ${c} tang dan`)
    }
    if (a > b &&  b> c) {
       return console.log(`${a}, ${b}, ${c} giam dan`)
    }
    else {
        return console.log(`${a}, ${b}, ${c} khong tang dan, giam dan`)
    }
}
sequense(4, 3, 2)
sequense(1, 3, 5)
sequense(4, 5, 2)
//arrow
let sequense = (a, b, c) => {
    if (a < b &&  b < c) {
       return console.log(`${a}, ${b}, ${c} tang dan`)
    }
    if (a > b &&  b> c) {
       return console.log(`${a}, ${b}, ${c} giam dan`)
    }
    else {
        return console.log(`${a}, ${b}, ${c} khong tang dan, giam dan`)
    }
}
sequense(4, 3, 2)
sequense(1, 3, 5)
sequense(4, 5, 2)

/* *********Chua Chay*******************
// viet ham countDecimal(number) tra ve chu so trong phan thap phan cua number
function digits_count(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }
  
    return count;
}
digits_count(9.1)
let countDecimal = function (number) {
    
        return number=(number % 1)*(10^(digits_count -1));
}
countDecimal(9.1);
*/

/********Chua chay***********
// viet ham isAscending(number) kiem tra day cua number co phai tang dan hay khong
let sequense = function (a, b, c) {
    if (a < b &&  b < c) {
       return console.log(`${a}, ${b}, ${c} tang dan`)
    }
    if (a > b &&  b> c) {
       return console.log(`${a}, ${b}, ${c} giam dan`)
    }
    else {
        return console.log(`${a}, ${b}, ${c} khong tang dan, giam dan`)
    }
}
let number = a*100+b*10+c;
let isAscending = function (number) {
        sequense(number)
}
isAscending(256)
*/

// 9. viet ham find(number) tra ve so n sao cho 1+2+...+n<=number . VD find(7)=3;
function find(number) {
    sum = 0;
    for (let i = 1; i <= number; i++){
        sum += i;
        
        if (sum <= number) {
            console.log(i);
        }
    }
}
find(7);
//arrow
find=(number) => {
    sum = 0;
    for (let i = 1; i <= number; i++){
        sum += i;
        
        if (sum <= number) {
            console.log(i);
        }
    }
}
find(7);

/* ***********Chua chay******************
// 10. Viet ham sum(value1, unit1, value2, unit2) quy doi ve cung don vi va tra ve tong value1+value2 theo unit1,
// bao gom km,m,cm,dm,mm. VD sum(1,'km',100,'m')=1,1km
function sum(value1, unit1, value2, unit2) {
let cm = a;
    let km = a/1000;
    let m = a / 100;
    let dm = a / 10;
    let mm= a*10
    return value1 + value2;

}
*/