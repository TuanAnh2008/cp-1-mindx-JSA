'use strict'
const getUserData = JSON.parse(localStorage.getItem('User'))
const h1  = document.querySelector('h1');
const btn = document.querySelector('.btn');
const h4  = document.querySelector('h4');


    if(getUserData) {
        const name = getUserData[getUserData.length - 1].name.split(' ').join(' ')
        h1.textContent = `Xin chào ${name} :), Email của bạn là: '${getUserData[getUserData.length - 1].email}' đúng không?`
        btn.style.display = 'none'
        h4.textContent = ''
    } else {
        btn.style.display = 'inline-block'
        let s = 10
        setInterval(() => {
            s--
            h1.textContent = `Bạn Chưa Đăng Ký Tài Khoản, tự động chuyển tới trang đăng ký sau ${s} giây`
            if(s === 0) {
                window.location.replace('./register.html')
            }
        }, 1000)
    }

