console.log(document)
/*let h1= document.getElementByID("one");
h1.stye.color='red'
console.log(h1)
*/
/*let h1=  document.getElementsByClassName("two");
for(let i of h1){
    i.style.color='red'
}*/

//console.log(h1);

/*let h1 = document.querySelectorAll(".two")
console.log(h1)*/

/*let h1=  document.querySelector("#one")
h1.innerText="byeee"*/
//console.log(h1.innerText);

//document.getElementsByTagName

/*let a    =document.querySelector("a")
a.setAttribute("href","http://flipcart.com")
console.log()*/

/*
const arr=[
    'https://media.istockphoto.com/id/2199061695/photo/sea-turtle-swims-with-ray-of-light-marine-life.webp?a=1&b=1&s=612x612&w=0&k=20&c=G8TtT_1nWTG5D5R8dNslVRgELNYBgrVk4aI-i6LXe_E=',
    'https://media.istockphoto.com/id/2233130980/photo/wintersweet.webp?a=1&b=1&s=612x612&w=0&k=20&c=wVdq38bALnZhyZ1noppLCTqcMeB1ISTFuAQyMFETENA=',
    'p.jpg',
    'krishna.jpg',
    '123.jpg'
]
const imageEl= document.querySelector('img');
let num=0;
setInterval(function(){
    imageEl.setAttribute('src',arr[num]);
    num= (num + 1) % arr.length;
},2000);*/

let body = document.querySelector('body');
function fun1(){
   // console.log("button clicked")
   body.style.backgroundColor="red"
    
}