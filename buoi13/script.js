//1,Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD: “hello world” => “Hello World”
let capitalize = (str) => {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(" ")
}
capitalize("hello world, my name is Jang")

//2,Viết hàm chuyển đổi một chuỗi thành dạng paramaterize. VD “Hello World” => “hello-world”
let paramaterize = (str) => {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++){
        str[i]=str[i].charAt(0).toLowerCase() + str[i].slice(1)
    }
    return str.join("-")
}
paramaterize("Hello World I love you")

//3,Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. VD: “Hello     world   !   ” => “Hello world !”
let sortSpace = (str) => {
   return str.replace(/\s+/g,' ').trim()
}
sortSpace("Hello     world   !   ")


// 4,Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại. VD “aBcD” => “AbCd”
let change = (str) =>{
    let result = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        }
        else {
            result +=str[i].toUpperCase()
        }
    }
    return result
}
change("aHnJnKKK")

//5,Viết hàm lặp chuỗi n lần. VD “Hehe”, 3 => “HeheHeheHehe”
let repeat = (n) => {
    let str = "Hehe";
    return str.repeat(n);
}
repeat(3);

//6,Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định. VD “ac”, “b”, 1 => “abc”
let add = (index) => {
    let str = "ac";
    let str2 = "b";
    return result = str.slice(0,index) + str2 + str.slice(index)
}
add(1)

//7,Viết hàm rút gọn chuỗi nếu chuỗi dài hơn giá trị chỉ định. VD “abcdef”, 2 => “ab…”;
let shortcut = (index) => {
    str = "abcdef";
    return result = str.slice(0,index) + "..."
}
shortcut(2)

//8,Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi. VD “abca”, “a” => 2
String.prototype.count = function (c) {
    let result = 0;
    for (let i=0; i < this.length; i++) {
        if (this[i] == c) {
            result++;
        } 
    }
    return result;
}
console.log("abca".count("a"))

//9,Viết hàm cắt chuỗi theo số từ chỉ định. VD “My name is Ba”, 2 => “My name”
let stringCut = (n) => {
    let str = "My name is Ba";
    let space = str.indexOf(" ");
    let result = "";
    for (let i=n; i < str.length; i++){
        space += str[i].indexOf(" ");
        result += str[i].slice(-1,space);
    }
    return result;
}
stringCut(2)

// //10,Viết hàm tạo chuỗi GUID ngẫu nhiên với độ dài 32 ký tự. VD “sfjh2ih4(U#%(kljo423oiir*(#%UIOJ”
let rand = function (n) {
    return Math.floor(Math.random() * 10**n).toString(16)
  }
  rand(32)

//11,Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode. VD: “ad” => “be”
let char = (str)=>{
    let result = "";
    for (let i = 0; i < str.length; i++){
        result += String.fromCodePoint(str.charCodeAt(i) + 1);
    }
    return result;
}
char("ad")




