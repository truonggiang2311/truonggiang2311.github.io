// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
let paragraph = document.getElementsByTagName("p");
let countString = (str) => {
    if (str.length > 8) return true;
    else return false;
}

for (let i = 0; i < paragraph.length; i++) {
    let content = paragraph[i].innerHTML.split(" ");
    let count = 0;
    for (let j = 0; j < content.length; j++) {
        if (countString(content[j])) {
            count++;
        }
        else {
            if (content[j] != " ")
                content[j] = "<span class='color'>Anh Ba đẹp trai 🤣</span>";
        }
    }
        //
    let newContent = content.join(" ");
    paragraph[i].innerHTML = newContent;
        console.log(`Đoạn văn thứ ${i + 1} có ${count} từ có độ dài lớn hơn 8`);
}

// 2. Style cho các từ có độ dài lớn hơn 8 trong p1

let span = document.body.firstElementChild.querySelectorAll(".color");
for (s of span) {
    s.style.color = "blue";
    
}
// 3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 🤣". Lưu ý thay thế đúng không thì 0đ!!!

// 4. Thêm src, alt, href cho ảnh, link
let img = document.getElementsByTagName("img")[0];
img.src="https://i.vietgiaitri.com/2020/11/4/linh-ka-khoe-anh-ngoi-len-dui-girl-xinh-bau-phan-ung-gat-khi-nhan-ve-binh-luan-hu-hong-e03-5349787.jpg"
img.alt = "hotgirl"

let link = document.getElementsByTagName("a")[0];
link.href="https://kenh14.vn/hoi-girl-xinh-viet-lot-tam-ngam-netizen-trung-nguoi-duoc-vi-giong-linh-ka-nguoi-kiem-suong-suong-70-trieu-thang-20190927001900686.chn"
link.textContent ='Hội girl xinh Việt "lọt tầm ngắm" netizen Trung: Người được ví giống Linh Ka, người kiếm sương sương 70 triệu/tháng'
// 5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"
let table = document.body.getElementsByTagName("table")[0];
for (let i = 0; i < table.rows.length; i++){
    let j = Math.floor(Math.random() * table.rows.length);
    table.rows[i].cells[j].style.backgroundColor = "orange";
}