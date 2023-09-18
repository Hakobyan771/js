const password = document.querySelector('.password')
const username = document.querySelector('.username')
const go = document.querySelector('.go')

go.onclick = function(){
    const passwordValue = password.value
    const usernameValue = username.value

    if(usernameValue.length < 3){
        console.log('username min lenght 3')
    } else if(passwordValue.length < 5){
        console.log('password min lenght 5')
    } else{
        console.log(usernameValue, passwordValue)
    }
}

const box =document.querySelector('.box')

box.onclick = function(){
    box.classList.toggle('aqua')
}

const input = document.querySelector('.input')
const text = document.querySelector('.text')

input.oninput = function(){
    text.innerHTML = input.value

    if(input.value.length > 10 ){
        text.style.color = 'red'
    } else{
        text.style.color = 'black'
    }

}

window.alert('number 1')
window.alert('number 2')
window.alert('number 3')

