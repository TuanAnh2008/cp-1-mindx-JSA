

// // 1.
// const giaiThua =  Number(prompt('nhập n'))

// let array = []
// for(let i = 1; i < giaiThua + 1; i++) {
//     array.push(i)
// }

// const hello =  array.reduce((acc,cur) =>  acc * cur)
// console.log(hello); 



// fill
// const H = 5;
// for(let i = 1; H >= i; i++){
//     for(var k = H; k > i;k--){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let j = 1;j <= i * 2 -1; j++){
//         document.write("*");
//     }
//     document.writeln("<br />");
// }



// 2.
const n = Number(prompt('Nhập số!'));
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n * 2 - 1; j++) {
        if(i===n || j === n-i+1 || j === n + i -1) {
            document.write('*')
        } else {
             document.write("&nbsp;&nbsp;") 
        }
    }
    document.write('<br>')
}


