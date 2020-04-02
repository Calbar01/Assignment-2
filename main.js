document.getElementById('modal-button').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.exit').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'none';
});