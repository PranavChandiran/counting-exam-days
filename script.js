// today=new Date();



window.onload = function() {
    let  showing = document.querySelector("#daysleft");
    let Today = new Date();
<<<<<<< HEAD
    let boardMonth = new Date(2023, 1, 23);
=======
    let boardMonth =new Date("2023-02-23");
>>>>>>> ce0862be9a6bfb2bb31d8e3d95971c127d913e13
    
    if (Today.getMonth()==11 && Today.getDate()>25) 
    {
    Today.setFullYear(boardMonth.getFullYear()+1); 
    }  
    
    let fullday = 1000*60*60*24;
    
    let final = (Math.ceil((boardMonth.getTime()-Today.getTime())/(fullday)));
    document.getElementById("daysleft").innerHTML= final;
<<<<<<< HEAD

 if ( final < 25) {

    document.body.style.backgroundColor = "#F40B00";

 }
    
}
=======
}
>>>>>>> ce0862be9a6bfb2bb31d8e3d95971c127d913e13
