let main = document.getElementById("container");
let form = document.querySelector("form");

let arr = JSON.parse(localStorage.getItem('arr')) || [];
let isUpdate = null;

function renderMain() {
   
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
               <button id="one" onclick="update(${arr[i].id})">Update</button>
               <button id="two" onclick="del(${arr[i].id})">Delete</button>
           </div>
        </div>`
     }

}

form.addEventListener('submit',(e)=>{
     let inputs = document.getElementsByTagName("input");

     let obj = {
       id:Date.now(),
       name : inputs[0].value,
       email : inputs[1].value,
       url : inputs[2].value
     }
     if(isUpdate){
        let idx = arr.findIndex((val) => val.id === isUpdate);
        arr[idx] = obj; 
        isUpdate = null;
     }else{
         arr.push(obj);
     }

     localStorage.setItem("arr",JSON.stringify(arr));
    
     e.preventDefault();
     renderMain();
     inputs[0].value="";
     inputs[1].value="";
     inputs[2].value="";
     
})

function del(id){
    let ans = arr.filter((val) => val.id !== id);
    arr = ans;
    renderMain();
}

function update(id){
    isUpdate=id;
    let ans = arr.filter((val) => val.id === id);
    let inputs = document.querySelectorAll("input");

    inputs[0].value = ans[0].name;
    inputs[1].value = ans[0].email;
    inputs[2].value = ans[0].url;
}

renderMain();
