let inp= document.querySelector('input')
let btn= document.querySelector('button')
let ul= document.querySelector('ul')


btn.addEventListener("click",()=>{
   // console.log("hyyy")

   let data= inp.value
   //console.log(data)

   let li= document.createElement("li")
   li.innerText=data
   ul.append(li)
   inp.value=" "
})
