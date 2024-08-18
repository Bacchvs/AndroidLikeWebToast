import {Toast, ToastDisplayer} from "/js/Toast.js";


var toast;
var toast_displayer;

var toastID = 1;

document.showToast = function showToast(){

    toast.show();
}

document.addNotification = function addNotification(){
    toast_displayer.display("notification "+toastID);
    toastID++;
}


document.addEventListener('DOMContentLoaded', () => {
    // a reusable Toast. 
    toast = Toast.makeText(document.body, "Hello, world !", Toast.LENGTH_LONG, true);
    
    // a multyToast displayer
    toast_displayer = new ToastDisplayer(document.getElementById("notifications"));
    
});
