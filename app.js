var btn1=document.getElementById("btn_1")
var btn2=document.getElementById("btn_2")
var btn3=document.getElementById("btn_3")
var div4=document.getElementById("view4")
var div5=document.getElementById("view5")
var div6=document.getElementById("view6")
var btn_top=document.getElementById("btntop")
window.addEventListener('load',g)
btn1.addEventListener('click', fun1)
btn2.addEventListener('click', fun2)
btn3.addEventListener('click', fun3)
btn_top.addEventListener('click' , function(){
    window.scrollTo(0,0)
})
function g(){
    let pos=div4.offsetTop
    localStorage.setItem('val1', `${pos}`)
    //console.log(pos)
}


function fun1(){
    const pos=localStorage.getItem('val1')
    var div4=document.getElementById("view4")
    window.scrollTo(0,pos)
    div5.style.display="none"
    div6.style.display="none"
    div4.style.display="flex"
    div5.setAttribute('class', '')
    div6.setAttribute('class', '')
    div4.setAttribute('class', 'view41')
    

}
function fun2(){
    const pos=localStorage.getItem('val1')
    var div4=document.getElementById("view4")
    window.scrollTo(0,pos)
    div4.style.display="none"
    div6.style.display="none"
    div5.style.display="flex"
    div4.setAttribute('class', '')
    div6.setAttribute('class', '')
    div5.setAttribute('class', 'view41')
    

}
function fun3(){
    console.log(2)
    const pos=localStorage.getItem('val1')
    var div4=document.getElementById("view4")
    window.scrollTo(0,pos)
    div4.style.display="none"
    div5.style.display="none"
    div6.style.display="flex"
    div4.setAttribute('class', '')
    div5.setAttribute('class', '')
    div6.setAttribute('class', 'view41')

}