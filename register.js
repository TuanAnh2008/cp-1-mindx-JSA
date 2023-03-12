'use strict'


const nameInp = document.querySelector('#name');
const emailInp = document.querySelector('#email');
const passwordInp = document.querySelector('#password');
const dateOfBirthInp = document.querySelector('#dob');
const btn = document.querySelector('.button')
const formMessage = document.querySelector('.form-message')

const inputState = {
    name: false,
    email: false,
    password: false,
}

// Data from localstorage 
const usersData = JSON.parse(localStorage.getItem('User')) ?? []

// Check length
function checkLength(e, numberLength) {

    if(e.target.value.trim().length >= numberLength) {
        inputState[e.target.id] = true;
        e.target.style.borderColor = 'green';
        e.target.closest('.form-item').querySelector('.input-message').style.color = 'green';
    } else {
        inputState[e.target.id] = false;
        e.target.style.borderColor = 'red';
        e.target.closest('.form-item').querySelector('.input-message').style.color = 'red';

    }

}

// Check email (regex)
function checkEmail(e) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regex.test(e.target.value.trim())) {
        inputState[e.target.id] = true;
        e.target.style.borderColor = 'green';
        // closest bắt đầu từ tìm phần tử itself, sau đó cha, và ông... cho tới khi tìm thấy
        e.target.closest('.form-item').querySelector('.input-message').style.color = 'green';
    } else {
        inputState[e.target.id] = false;
        e.target.style.borderColor = 'red';
        e.target.closest('.form-item').querySelector('.input-message').style.color = 'red';
    }
    
}

// when typing input  (check oninput)
function clearErrorUI(e) {
    e.target.style.borderColor = 'black';
    e.target.closest('.form-item').querySelector('.input-message').style.color = 'black';
}

// Check Input
function checkInput(e) {
   if(e.target === nameInp) {
    checkLength(e, 6)
   } else if(e.target === passwordInp) {
    checkLength(e, 8)
   }
}


// Handler Events
function handlerEvents() {
    // name Input
    nameInp.addEventListener('blur', e => {
        checkInput(e)
    })
    nameInp.addEventListener('input', e => {
        clearErrorUI(e)
    })

    // email Input
    emailInp.addEventListener('blur', e => {
        checkEmail(e)
    })
    emailInp.addEventListener('input', e => {
        clearErrorUI(e)
    })

    // password Input
    passwordInp.addEventListener('blur', e => {
        checkInput(e)
    })
    passwordInp.addEventListener('input', e => {
        clearErrorUI(e)
    })

    // date of birth Input
    dateOfBirthInp.addEventListener('change', e => {
    })  

    // button
    btn.addEventListener('click', e => {
        e.preventDefault()
       const intpuCheck =  Object.values(inputState).every((item) => item)
       let accountExist = false;
      if(intpuCheck) {
        for(let item of usersData) {
            if(nameInp.value === item.name && passwordInp.value === item.password && emailInp.value === item.email) {
                accountExist = true; 
                break;
            }
        }
        if(!(accountExist)) {
            formMessage.style.color = 'green'
            formMessage.textContent = 'Sucess!'
            usersData.push({
                name: nameInp.value.trim(),
                email: emailInp.value.trim(),
                password: passwordInp.value.trim(),
                DOB: dateOfBirthInp.value ?? 'empty'
            })
            localStorage.setItem('User', JSON.stringify(usersData))
            nameInp.value = passwordInp.value = emailInp.value = ''
            setTimeout(() => {
                window.location.replace('./show.html')
            }, 2000)
        } else {
            formMessage.style.color = 'red'
            formMessage.textContent = 'This account has already exists'
        }
      } else {
        formMessage.style.color = 'red'
        formMessage.textContent = 'Please enter all input fields correctly'
      }
    })

}

handlerEvents()


// * lưu ý
// Ngày tháng năm sinh người dùng không bắt buộc phải nhập
// tên, email, mật khẩu thì bắt buộc