// BÀI TẬP 5 : Tính tổng 2 kí số
//     - Nhập vào 1 con số có 2 chữ số bất kì
//         - Tính tổng số vừa nhập.

var a = 98;
var a1 = a % 10;
var a2 = Math.floor(a / 10);
var result = a1 + a2;
console.log('Tổng 2 chữ số vừa nhập : ', result);