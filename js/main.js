import {Toast} from "/js/Toast.js";

document.addEventListener('DOMContentLoaded', () => {
    var toast = Toast.makeText(document.body, "Hello, world !", Toast.LENGTH_LONG);
    
    setInterval(()=>{toast.show()},5000);

});
