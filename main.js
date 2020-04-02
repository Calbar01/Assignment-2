let modalBtn = document.getElementById("modal-btn")

let modal = document.querySelector(".modal-container")

modalBtn.onclick = function(){
    modal.style.display = "block"
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none"
    }
}