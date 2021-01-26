//Homework Array

//1,Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng
arr = [1, 2, 3, 4, 5];
sum = 0;
for (let i = 0; i < arr.length;i++){
  sum += arr[i];
}
console.log(sum/arr.length)

//2,Cho một mảng số, viết hàm tìm index của một số trong mảng
arr = ["a", "b", "c", "d"]
arr.indexOf("b")

//3,Viết hàm sao chép một mảng số
arr = [1, 2, 3]
let newArr = arr.map((i) => i);

//4,Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng
arr = [3, 1, 6, 3, 8, 9];
arr.sort();
console.log(arr.slice(arr.length - 1))

//5,Viết hàm đổi chỗ vị trí 2 phần tử trong mảng
arr = [1, 2, 3, 4, 5, 6];
  arr._swap = function (i,j) {
      let temp = arr[i-1];
      arr[i-1] = arr[j-1]
    arr[j-1] = temp;
    return this;
}
  arr._swap(1,3);

//6,Cho một mảng số đã được sắp xếp tăng dần, viết hàm tìm số lớn thứ 2 trong mảng
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maxSC= arr[arr.length-2]
maxSC

//7, Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD “hello world” => “Hello World”
let str = "hello world"
str = str.split(" ")
for (let i = 0; i < str.length; i++){
  str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1)
}
str.join(" ")

//8,Viết hàm tìm số lần xuất hiện lớn nhất của một phần tử trong mảng
let countExist = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (n == arr[i]) count++;
  }
  return count;
};
let findMaxExist = (arr) => {
  let max = countExist(arr, arr[0]),
    item = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < countExist(arr, arr[i])) {
      max = countExist(arr, arr[i]);
      item = arr[i];
    }
  }
  return item;
};

//9,Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định. VD “Hello”, 2 => [“He”, “ll”, “o”]
let cut = (string, len) => {
  let newArr = [];
  for (let i = 0, j = 0; i <= string.length; i += len, j++){
    newArr[j]=string.slice(i,i+len)
  }
  return newArr
}
cut("hello",3)

//10,Viết hàm tách chuỗi thành một mảng các chuỗi con. VD “dog” => [“d”, “do”, “dog”, “og”, “g”]
let arr = ["dog"]
let result = [];
for (let i = 0, j = i + 1; i < arr.length; i++){
  slice(0,i)
}






//11.Cho một mảng số, viết hàm loại bỏ số trùng lặp trong mảng. VD [1,2,2,3] => [1,2,3]
let arr = [1, 2, 2, 3]
function deduplicate() {
  return arr.filter((value, index, arr) => arr.indexOf(value) === index);
}
deduplicate()

//12,Viết hàm trả về một mảng lưu dãy số Fibonacci từ 0 -> n. VD 8 => [0, 1, 1, 2, 3, 5, 8, 13]
let arr = [];
function printFibo(n) {
  let f1 = 0, f2 = 1, term = 1;
  if (n == 0) {
    arr[0] = f1;
    console.log(arr)
  }
  else {
    while (term<=n) {
      console.log(f1);
     let fth = f1 + f2;
      f1 = f2;
      f2 = fth;
      term += 1;
    }
  }
} 
printFibo(8)

//13,Viết hàm trả về một mảng các số trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [2,3]
let arr = [1, 2, 3];
let arr2 = [2, 3, 4];
let arr3 = arr.concat(arr2);
function deduplicate() {
  return arr3.filter((value,index,arr3)=>arr3.indexOf(value) !=index)
}
deduplicate()

//14,Viết hàm trả về một mảng các số không trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [1,4]
// let arr = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let arr3 = arr.concat(arr2);
// function deduplicate() {
//   return arr3.filter((value,index,arr3)=>arr3.indexOf(value) !=index)
// }
// deduplicate()
// newArr= 


//15,Viết hàm loại bỏ các giá trị “false” khỏi mảng. VD [null, 1, 0, NaN, “”] => [1]
arr = [null, 1, 0, NaN, ""];
arr.filter((i) => !!i)

// 1,Viết hàm sắp xếp một mảng số nguyên
let arr = [2, 1, 6, 3, 7, 9, 4, 5];
arr.sort();

// 2,Viết hàm sắp xếp một mảng “string”
// 3,Cho một mảng object user [{name: “Ba”, age: 28}, {name: “Ba”, age: 28}, …] Viết hàm sắp xếp mảng user tăng dần theo age
let user = [
  { name: "Ba", age: 28},
  { name: "Bon", age: 30 },
  {name: "BeoMup", age: 20},
]
user.sort((a, b) => a.age - b.age)

// 4,Tương tự, viết hàm sắp xếp mảng user theo name.length
let user = [
  { name: "Ba", age: 28 },
  {name: "BeoMup", age: 20},
  { name: "Bon", age: 30 },
]
user.sort((a, b) => a.name.length - b.name.length);

// 5, Viết hàm sắp xếp mảng user theo name
let user = [
  { name: "Ba", age: 28 },
  {name: "Anh", age: 20},
  { name: "Bon", age: 30 },
]
user.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
  var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // name trùng nhau
  return 0;
});

// 6, Cho một mảng số, và một số n, tìm trong mảng vị trí 2 phần tử có tổng bằng n, kết quả trả về là một mảng lưu vị trí 2 phần tử, hoặc mảng rỗng nếu không tìm thấy
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
function sum(n) {
  for (let i = 0,j=i+1; i < arr.length,j<arr.length; i++,j++){
    if (arr[i] + arr[j] == n) {
      return result = [arr[i],arr[j]]
    }
  }
  return result
}
sum(5)

// 7,Viết hàm lấy một phần tử ngẫu nhiên trong mảng
let arr = ["a","b","c","d","e"]
arr[Math.floor(Math.random() * arr.length)]

// 8,Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)
let arr = ["a", "b", "c", "d", "e"]
function shuffleArray() {
  for (let i = arr.length-1; i >0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;
}
shuffleArray() 

// 9,Viết hàm biến một một mảng 2 chiều thành mảng 1 chiều.  
// VD [[1,2,3],[3,4,5] => [1,2,3,3,4,5]

// 10,Viết hàm biến một mảng nhiều chiều (3 hoặc nhiều hơn) thành mảng một chiều

// 1,Viết hàm biến đổi các phần tử của mảng số nguyên thành bình phương của chính nó
let arr = [1, 2, 3, 4, 5]
  arr.map((i)=>i*i)

// 2,Viết hàm biến đổi các phần tử của mảng chuỗi thành dạng uppercase()
let arr = ["a", "b", "c", "d"];
function uppercase() {
  for (let i = 0; i < arr.length; i++){
    arr[i]=arr[i].toUpperCase()
  }
  return arr;
}
uppercase();

// 3,Viết hàm lọc ra các phần tử có kiểu “number” trong một mảng hỗn hợp
let arr = [1, "a", 2, "b", "c", 3];
let result = [];
function typeOfNumber() {
  for (let i = 0; i < arr.length; i++){
    if (typeof (arr[i]) == "number") {
      result.push(arr[i]);
    }
  }
  return result;
}
typeOfNumber()

// 4,Tạo một mảng object với các thông tin name, age, …
let arr = [
  { name: "truong giang", age: 25 },
  { name: "brian nguyen", age: 18 },
  { name: "giang nguyen", age: 30 }
]
// Viết hàm lọc ra các object với age > 20
arr.filter((i) => i.age > 20);
// Viết hàm chuyển đổi name của object thành dạng capitalize
let arr = [
  { name: "truong giang", age: 25 },
  { name: "brian nguyen", age: 18 },
  { name: "giang nguyen", age: 30 }
]
for (let i = 0; i < arr.length; i++){
  let str = arr[i].name;
  str = str.split(" ");
    for (let j = 0; j < str.length; j++){
      str[j] = str[j].charAt(0).toUpperCase() + str[j].slice(1);
    }
  console.log(str.join(" "))
}
// Viết hàm chuyển đổi name của object thành dạng viết tắt. VD “Ba Nguyen” => “Ba N.”
let arr = [
  { name: "Truong Giang", age: 25 },
  { name: "Brian Nguyen", age: 18 },
  { name: "Giang Nguyen", age: 30 }
]
function changeName(){
  for (let i = 0; i < arr.length; i++){
    let str = arr[i].name;
    let space = str.indexOf(" ");
    str=str.slice(0, space + 2) + ".";
    console.log(str)
  }
}
changeName()

// Viết hàm để chuyển mảng object thành một mảng chỉ chứa name.
// VD [{name: “Ba”, age: 28}, {name: “Béo Ú”, age: 82}] => [“Ba”, “Béo Ú”]
let arr=[{name: "Ba", age: 28}, {name: "Béo Ú", age: 82}]
function arrName() {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result[i] = arr[i].name;
  }
  return result;
}
arrName()



//////////////////////////
/////////Date Method/////////
//////////////////////////

// Bài tập Datetime
// 1. Viết hàm kiểm tra xem một giá trị có phải giá trị thời gian hợp lệ hay không
// 2. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại. VD “T2”, “T3”, “CN”
let now = new Date();
switch (now.getDay()) {
  case 0:
    console.log("CN");
    break;
    case 1:
      console.log("t2");
    break;
    case 2:
      console.log("t3");
    break;
    case 3:
      console.log("t4");
    break;
    case 4:
      console.log("t5");
    break;
    case 5:
      console.log("t6");
    break;
    case 6:
      console.log("t7");
    break;
  default:
    console.log("LoL")
}

// 3. Viết hàm trả về ngày trước ngày hiện tại n ngày
function dayBefore(n) {
  let today = new Date();
  let dayInPast = new Date(today.getFullYear(),today.getMonth(),today.getDate() - n);
  return dayInPast;
}
dayBefore(5)

// 4. Viết hàm trả về số ngày trong tháng bất kỳ, năm và tháng là tham số truyền vào
function numOfDaysInMon(y, m) {
  return new Date(y, m, 0).getDate();
}
numOfDaysInMon(2020, 02);

// 5. Viết hàm tính số giây hiện tại trong ngày
function countSeconds() {
  let now = new Date();
  console.log("So giay hien tai la:" +now.getHours()*60*60+now.getMinutes()*60+now.getSeconds())
}
countSeconds()

// 6. Viết hàm tính số ngày còn lại đến tết dương lịch năm sau
function dayLeft() {
  let today = new Date();
  let newYear = new Date(today.getFullYear() + 1, 01, 1);
    console.log(today);
  console.log(newYear);
  console.log((newYear.getTime()-today.getTime())/(24*60*60*1000))
}
dayLeft() 

// 7. Viết hàm kiểm tra một ngày có phải cuối tuần hay không, ngày là tham số truyền vào
function checkDayWeekend(d) {
  let now = new Date(2020,11,d);
  if (now.getDay() == 0 || now.getDay() == 6) {
    console.log(`Ngay ${d} la ngay cuoi tuan`)
  }
  else {
    console.log(`Ngay ${d} khong phai ngay cuoi tuan`)
  }
}
checkDayWeekend(26)
checkDayWeekend(25)
// 8. Viết hàm trả về số quý tương ứng với giá trị ngày tháng truyền vào (quý 1 => 4)
// 9. Viết hàm tính tổng số ngày đã qua trong năm
function dayLeft() {
  let now = new Date();
  let startYear = new Date(2020, 0, 1);
  console.log((now.getTime() - startYear.getTime())/(24*60*60*1000))
}
dayLeft()
// 10. Viết hàm tính tuổi theo ngày tháng truyền vào
function age() {
  let today = new Date();
  let birthday = new Date(1995,10,23)
  console.log("So tuoi la " + Math.floor((today.getTime()-birthday.getTime())/(365*24*60*60*1000)))
}
age()
// 11. Viết hàm trả về chuỗi ngày tháng hiện tại có dạng “10:01:30 CN 20/01/2020”

// 12. Viết hàm trả về thời gian chênh lệnh giữa 2 thành phố trên TG (🥴 trong danh sách múi giờ)

// 13. Viết hàm trả về ngày sau ngày hiện tại n ngày
function daynext(n) {
  let now = new Date();
  return daynext = new Date(now.getFullYear(),now.getMonth(),now.getDate() +n )
}
daynext(5)
// 14. Viết hàm trả về số giờ chênh lệnh giữa 2 ngày
function hoursleft(a,b) {
  let now = new Date();
  let day1 = new Date(now.getFullYear(), now.getMonth() + a)
  let day2 = new Date(now.getFullYear(), now.getMonth() + b)
  console.log("Chenh lech gio giua 2 ngay la: " + (day2 - day1) / (24*60 * 60 * 1000));
}
hoursleft(1,2)
// 15. Viết hàm trả về ngày tương ứng với ngày đầu tuần
function toMonday(d) {
  let now = new Date();
  let day = new Date(now.getFullYear(),now.getMonth(), d)
  if (day.getDay() == 1) {
    console.log(`${d} la ngay dau tuan`)
  }
  else {
    console.log(`${d} khong phai ngay dau tuan`)
  }
}
toMonday(28);
toMonday(29);

