var btnplus = Array.from(document.getElementsByClassName('btn+'))
console.log('btn+:', btnplus)
for (let el of btnplus) {
    el.addEventListener("click", function () {
        let t = (el.previousElementSibling).value;
        let s = parseInt(t)
        s++;
        (el.previousElementSibling).value = s;
        sum()
    })
}

var btnmin = Array.from(document.getElementsByClassName('btn-'))
console.log('btn-:', btnmin)
for (let el of btnmin) {
    el.addEventListener("click", function () {
        let t = (el.nextElementSibling).value;
        let s = parseInt(t)
        if (s > 0) {
            s--;
        }
        (el.nextElementSibling).value = s;
        sum()
    })
}
function sum() {
    var price = Array.from(document.getElementsByClassName('price'))
    var quantiy = Array.from(document.getElementsByClassName('qnt'))
    console.log('price', price);
    console.log('price', price);
    var s = 0
    for (let i = 0; i < price.length; i++) {
        s += parseInt(price[i].innerText) * parseInt(quantiy[i].value);

    } console.log('s:', s);
    return (document.querySelector('.total').innerText = s + " " + "TND")
}
var like=Array.from(document.querySelectorAll('.fa-heart'))
console.log('like=',like);
for(let el of like){
    el.addEventListener("click",function(){
        el.classList.toggle('red')
    })
}