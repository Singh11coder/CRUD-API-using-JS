let main = document.getElementById("container");
let form = document.querySelector("form");

let arr = [];
form.addEventListener('submit',(e)=>{
     let inputs = document.getElementsByTagName("input");

     let obj = {
       id:Date.now(),
       name : inputs[0].value,
       email : inputs[1].value,
       url : inputs[2].value
     }

     arr.push(obj);
     e.preventDefault();
     main.innerHTML = "";
     for(let i=0;i<arr.length;i++){
        main.innerHTML += `<div class="one">
           <div class="two"> 
              <img src="${arr[i].url}" width="250">
           </div>
           <div class="three">
              <h1>${arr[i].name}</h1>
              <h3>${arr[i].email}</h3>
           </div>
           <div class="btns">
               <button id="one">Update</button>
               <button id="two">Delete</button>
           </div>
        </div>`
     }
     
})