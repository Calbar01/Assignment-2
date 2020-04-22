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

    else if (surname.value == ""){
        window.alert("Please enter your surrname.");
        surname.focus();
        return false;
    }

    else if (email.value == ""){
        window.alert("Please enter your email.");
        email.focus();
        return false;
    }

    else if (message.value == ""){
        window.alert("Please enter a message.");
        message.focus();
        return false;
    }

    else {
    return true;
    }
};

//Help found from https://www.youtube.com/watch?v=gLWIYk0Sd387
/*Creates function to 'grab' the modal-button, add an event listener, and if the user clicks on the button, 
the modal will change to 'flex' to be able to view the modal*/
    function modalContacts(){
        document.querySelector('.bg-modal').style.display= 'flex';
    };

function check(){
    if (validation() == true){
        modalContacts();
     }
    };

//Random Quote Modal
let randomquoteTrigger = document.querySelector(".image1");
let closeButton = document.querySelector('.exit');
function openRandomQuote(){
    document.querySelector('.randomQuoteModal').style.display = 'flex';
}



//To-Do List Modal
let todolistTrigger = document.querySelector(".image2");
function openTodo(){
    document.querySelector('.todolistModal').style.display = 'flex';
}



//Weather Modal
let weatherTrigger = document.querySelector(".image3");
function openWeather(){
    document.querySelector('.weatherModal').style.display = 'flex';
}


//Babies Modal
let babiesTrigger = document.querySelector(".image4");
function openBabies(){
    document.querySelector('.babiesModal').style.display = 'flex';
}

function close(){
    document.querySelector('.randomQuoteModal').style.display = 'none';
    document.querySelector('.todolistModal').style.display = 'none';
    document.querySelector('.weatherModal').style.display = 'none';
    document.querySelector('.babiesModal').style.display = 'none';
}


function windowOnClick(event) {
    if (event.target === randomquoteTrigger) {
        openRandomQuote();
    }
    if (event.target === todolistTrigger){
        openTodo();
    }
    if(event.target === weatherTrigger){
        openWeather();
    }
    if(event.target === babiesTrigger){
        openBabies();
    }
    if(event.target === closeButton){
        close();
    }
}


window.addEventListener("click", windowOnClick);


//Help found from https://sabe.io/tutorials/how-to-create-modal-popup-box



const burgerNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('.nav-clicked');
        burger.classList.toggle('.toggle');
    });
}

burgerNav();

//For some reason this has stopped workoing^ need to fix

let h = 0;
let c =0;
let j = 0
function moveHTML() {
    if (h===0){
        h = 1;
        let HTML = document.querySelector('.HTMLbar');
        let width = 1;
        let id = setInterval(frame,10);
        function frame(){
            if (width >= 85){
                clearInterval(id);
                h = 0;
            }else{
                width++;
                HTML.style.width = width + "%";
                HTML.innerHTML = width + "%";
            }
        }
    }
}
function moveCSS() {
    if (c===0){
        c = 1;
        let CSS = document.querySelector('.CSSbar');
        let width = 1;
        let id = setInterval(frame,10);
        function frame(){
            if (width >= 75){
                clearInterval(id);
                c = 0;
            }else{
                width++;
                CSS.style.width = width + "%";
                CSS.innerHTML = width + "%";
            }
        }
    }
}
function moveJS() {
    if (j===0){
        j = 1;
        let JS = document.querySelector('.JSbar');
        let width = 1;
        let id = setInterval(frame,10);
        function frame(){
            if (width >= 50){
                clearInterval(id);
                j = 0;
            }else{
                width++;
                JS.style.width = width + "%";
                JS.innerHTML = width + "%";
            }
        }
    }
}


moveHTML();
moveCSS();
moveJS();


//Help for progress bar found from several sources: https://www.edureka.co/blog/html-progress-bar/
//https://www.w3schools.com/howto/howto_js_progressbar.asp https://www.geeksforgeeks.org/creating-progress-bar-using-javascript/



