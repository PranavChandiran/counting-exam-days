

window.onload = function() {
    let  showing = document.querySelector("#daysleft");
    let Today = new Date();
    let boardMonth = new Date(2023, 1, 23);
    
    if (Today.getMonth()==11 && Today.getDate()>25) 
    {
    Today.setFullYear(boardMonth.getFullYear()+1); 
    }  
    
    let fullday = 1000*60*60*24;
    
    let final = (Math.ceil((boardMonth.getTime()-Today.getTime())/(fullday)));
    document.getElementById("daysleft").innerHTML   = final;

    if ( final < 25) {

        document.body.style.backgroundColor = "#F40B00";
    
     }
}
