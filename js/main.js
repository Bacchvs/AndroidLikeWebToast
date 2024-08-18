import {Toast} from "/js/Toast.js";

document.addEventListener('DOMContentLoaded', () => {
    // a reusable Toast. 
    var toast = Toast.makeText(document.body, "Hello, world !", Toast.LENGTH_LONG, true);
    
    setInterval(()=>{toast.show()},4000);

});
