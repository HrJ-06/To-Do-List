
var ans= document.getElementById("add-type");
const listz= document.getElementById("list-items");
function addItem(){
    if(ans.value==='' || ans.value[0]===' '){
        alert("Give the name of the Task!")
    }
    else{
        let item= document.createElement("li");
        item.innerHTML= ans.value;
        listz.appendChild(item);
        let checkk= document.createElement("span");
        checkk.innerHTML= "<i class='fa-solid fa-xmark'></i>";
        item.appendChild(checkk);

    }
    ans.value='';
    saveit();
}

listz.addEventListener("click",function(i){
    if(i.target.tagName==="LI"){
        i.target.classList.toggle("item-check");
        saveit();
    }
    else if(i.target.tagName==="I"){
        i.target.parentElement.parentElement.remove();
        saveit();
    }
});

function saveit(){
    localStorage.setItem("data",listz.innerHTML);
}

function getit(){
    listz.innerHTML=localStorage.getItem("data");
}

getit();