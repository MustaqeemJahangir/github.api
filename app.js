
let div=document.querySelector('.content')
let h1 =document.querySelector("#head")
let input=document.querySelector('#username')
let rendere=document.querySelector("#hola")
function sum() {
    fetch(`https://api.github.com/users/${input.value} `)
    .then((res)=>{
        if(!res.ok){
            console.log('error')
        }
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        div.innerHTML=` <div class="card">
          <img src="${data.avatar_url}" alt="">
          <h1>name :${data.name}</h1>
          <h1>follower :${data.followers}</h1>
          <h1>id num :${data.id}</h1>
  
  
  
        </div>`


    })
}
        
    
        





