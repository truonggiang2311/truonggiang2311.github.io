//1. Viết hàm tạo Weapon với các thuộc tính name, damage, ...
let weapon = {
    name: "sword",
    damage: 1000,
    color: "black"
}
weapon;

//2. Viết hàm tạo Player với các thuộc tính name, level, weapon, weapon object khởi tạo từ Weapon. Player có các methods:
//attack() tính và in ra màn hình lượng sát thương gây ra = weapon.damage * level
//changeWeapon() thay đổi weapon của Player
let weapon = {
    name: "kiem",
    damage: 1000,
    color: "den"
}

let player = {
    name: "Giang",
    level: 100,
    weapon: weapon,
    attack() {
        return this.weapon.damage * this.level
    },
    changeWeapon() {
        return weapon = {
            name: "sung",
            damage: 2000,
            color: "xanh"
        }
    }
}
player.changeWeapon()

// Tạo một vài đối tượng từ Player và Weapon, gọi phương thức attack() trên các đối tượng đó
function Weapon(name,damage,color) {
    this.name = name;
    this.damage = damage;
    this.color = color;
}
let dao = new Weapon("dao", 500, "vang");
let thuong = new Weapon("thuong", 1500, "xam");
let bom = new Weapon("bom", 5000, "do");
let cung = new Weapon("cung", 700, "cam")

function Player(name, level, Weapon)  {
    this.name = name;
    this.level = level;
    this.Weapon = Weapon;
    this.attack = function () {
        return this.Weapon.damage * this.level
    }
}
let Player1 = new Player("Player1", 200, dao)
let Player2 = new Player("Player2", 300, thuong)
let Player3 = new Player("Player3", 400, bom)
let Player4 = new Player("Player4", 100, cung)

Player1.attack();

// //Tạo một object calculator, có các thuộc tính a, b là 2 số, và các phương thức:
// get(a, b) tham số nhận vào là 2 số a, b
// add() trả về tổng a + b
// sub() trả về hiệu a - b
// div(), mul(), rem(), exp(), … trả về kết quả phép tính tương ứng
// Làm thế nào để cho phép gọi hàm theo chuỗi VD cal.get(4,5).add(); // 9
let calculator = {
    a: 1,
    b: 2,
    get(a, b) {
        a = this.a; 
        b = this.b;
        console.log(`get(${a},${b})`);
    },
    add() {
       return this.a + this.b;
    },
    sub() {
        return this.a-this.b
    },
    div() {
        return this.a / this.b
    },
    mul() {
       return this.a * this.b 
    },
    rem() {
        return this.a /this.b *100 
    },
    exp() {
        console.log(Math.exp(this.a));
        console.log(Math.exp(this.b));
    }
};
calculator.add();


// //Viết hàm tạo Counter, có thuộc tính count, và các phương thức
// count là tham số truyền vào, mặc định = 0
// up() tăng count lên 1
// down() giảm count 1
// get() in ra count hiện tại
// Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();

let Counter = {
    count: 0,
    up() {
        console.log(this.count + 1);
        return this;
    },
    down() {
        console.log(this.count - 1);
        return this;
    },
    get() {
        console.log(Counter.count + Counter.up() + Counter.down())
        return this;
    }
}
Counter.up().up().get().down().get();


//Viết hàm tạo Girl có các thuộc tính và phương thức tùy ý 😅
let girl = {
    height: 165,
    weight: 50,
    hair() {
        console.log("black hair")
    }
}

//Viết hàm tạo Boy có các thuộc tính và phương thức tùy ý 
let boy = {
    height: 180,
    weight: 80,
    hair() {
        console.log("black hair")
    }
}