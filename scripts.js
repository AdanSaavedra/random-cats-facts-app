const show = document.querySelector('#root')
const btn = document.querySelector('#btn')


var request = new XMLHttpRequest()

request.open('GET', 'https://meowfacts.herokuapp.com/?lang=esp', true)
request.onload = function (){
    var data = JSON.parse(this.response)
    var data1 = data.data[0]

    if(request.status >=200 && request.status<400){
        const myVar = JSON.stringify(data1)
        show.innerText = myVar
    }else {
        console.log('error')
    }
}
function refreshPage(){
    window.location.reload()
}


request.send()