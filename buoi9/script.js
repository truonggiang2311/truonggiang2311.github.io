1
/*
let a = +prompt("Chieu rong hinh chu nhat la");
let b = +prompt("Chieu rong hinh chu nhat la");
console.log("chu vi la", (a + b) * 2);
console.log("dien tich la", a * b);
*/

2
/*
let a = +prompt("nhap ban kinh hinh tron");
console.log("Chu vi hinh tron la", 2 * a * 3.14 );
console.log("dien tich hinh tron la", 3.14 * a * a )
*/

3
/*
let a = +prompt("nhap a");
let b = +prompt("nhap b");
console.log("nghiem phuong trinh ax+b=0 la", - b / a);
*/

4
/*
let a = +prompt("nhap so a(cm)");
console.log("a(mm)=", a * 10);
console.log("a(m)=", a / 100);
console.log("a(km)=", a / 100000);
*/

5
/*
let a = +prompt("nhap so a(Celcius)");
console.log("a(Fahrenheit)=", a * 33.8);
console.log("a(Kevin)=", a * 273.15);
*/

6
/*
let a = +prompt("nhap so a(phut)");
console.log("a(h)=", a / 60);
*/

1
/*
let a = +prompt("nhap so a");
let b = +prompt("nhap so b");
let c = +prompt("nhap so c");
if (a > b && a > c) {
    console.log("so lon nhat la", a)
}
else if (b > a && b > c) {
    console.log("so lon nhat la", b)
}
else if (c > a && c > b) {
    console.log("so lon nhat la", c)
}
*/

2
/*
let a = +prompt("nhap so a");
if (a % 5 == 0 && a % 11 == 0) {
    console.log("so nay chia het cho 5 va 11");
}
else {
    console.log("so nay khong chia het cho 5 va 11")
}
*/

3
/*
let a = +prompt("nhap so nam")
if (a % 4 == 0 && a % 100 != 0) {
    console.log("day la nam nhuan")
}
else {
    console.log("day khong phai nam nhuan")
}
*/

4
/*
let char = prompt("nhap ky tu bat ky");
if (/^[a-z]+$/i.test(char)) {
    console.log(char + " thuoc bang ky tu Alphabet")
}
else {
    console.log(char + " khong thuoc Alphabet")
}
*/

5
/*
let a = prompt("nhap 1 chu cai bat ky");
if (a == "u" || a == "e" || a == "o" || a == "a" || a == "i") {
    console.log(a + " la nguyen am");
}
else {
    console.log(a + " la phu am")
}
*/

6
/*
let letters = prompt("nhap chu cai bat ky");
if (letters = letters.toLocaleUpperCase) {
    console.log(letters + " la chu in hoa")
}
else {
    console.log(letters + " la chu thuong");
}
*/

7
/*
let a = +prompt("nhap so a");
let b = +prompt("nhap so b");
let c = +prompt("nhap so c");
delta = b ** - 4 * a * c;
if (a == 0) {
    console.log("nghiem cua pt la", -c/b)
}
else if (a != 0) {
    if (delta == 0) {
        console.log("pt co nghiem kep la ", -b/(2*a) )
    }
    else if(delta>0)
        console.log(`pt co 2 nghiem la x1= ${x1 = (-b + Math.sqrt(delta)) / (2 * a)} va x2= ${x2 = (-b - Math.sqrt(delta)) / (2 * a)}  `)
    else {
        console.log("pt vo nghiem")
    }
}
*/

8
/*
let a = +prompt("nhap diem cua hs");
if (a < 4) {
    console.log("Loai F")
}
else if (a < 5.5) {
    console.log("Loai D")
}
else if (a < 7) {
    console.log("Loai C")
}
else if (a < 8.5) {
    console.log("Loai B")
}
else if (a <= 10) {
    console.log("Loai A")
}
*/