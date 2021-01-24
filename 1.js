// Bilili私信

// function start() {
//     i = setInterval(() => {
//         for(let i = 0; i < 30; i++) {
//             document.getElementsByClassName('send-box')[0].__vue__.content = '输入值';
//             document.getElementsByClassName('btn-box send-btn active')[0].click();   
//             console.log(i);
//         }
//     }, 500)
// }

// function stop() {
//     clearInterval(i)
// }


// 微博回复

var arr = ['','']

function start() {
    i = setInterval(() => {
        var a = document.getElementsByClassName('W_input');
        var c = Math.floor(Math.random()*1000) % arr.length;
        a[2].value = a[2].value + arr[c];
        console.log(arr[c]);
        document.getElementsByClassName('W_btn_a')[0].click();   
        console.log(i);
    }, 1000)
}

function stop() {
    clearInterval(i)
}

start()