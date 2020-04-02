//Help found from https://www.youtube.com/watch?v=gLWIYk0Sd387

/*Creates function to 'grab' the modal-button, add an event listener, and if the user clicks on the button, 
the modal will change to 'flex' to be able to view the modal*/
document.getElementById('modal-button').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

/*Does opposite of previous function, resets the display to 'none' if the user clicks on the exit button*/
document.querySelector('.exit').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'none';
});