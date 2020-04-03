/*This function takes the input from the form, and makes sure the user has entered a value in.
Help found from https://www.geeksforgeeks.org/form-validation-using-html-javascript/*/
function validation(){
    let firstname = document.forms["messageForm"]["user_firstname"];
    let surname = document.forms["messageForm"]["user_surname"];
    let email = document.forms["messageForm"]["user_email"];
    let message = document.forms["messageForm"]["user_message"];

    if (firstname.value == ""){
        window.alert("Please enter your first name.");
        firstname.focus();
        return false;
    }

    if (surname.value == ""){
        window.alert("Please enter your surrname.");
        surname.focus();
        return false;
    }

    if (email.value == ""){
        window.alert("Please enter your email.");
        email.focus();
        return false;
    }

    if (message.value == ""){
        window.alert("Please enter a message.");
        message.focus();
        return false;
    }

    return true;
}




//Help found from https://www.youtube.com/watch?v=gLWIYk0Sd387

/*Creates function to 'grab' the modal-button, add an event listener, and if the user clicks on the button, 
the modal will change to 'flex' to be able to view the modal*/
if (validation == true){
    document.getElementById('modal-button').addEventListener('click',
    function(){
        document.querySelector('.bg-modal').style.display = 'flex';
    });
}


/*Does opposite of previous function, resets the display to 'none' if the user clicks on the exit button*/
document.querySelector('.exit').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = 'none';
    
});

