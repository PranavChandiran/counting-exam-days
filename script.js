// today=new Date();
// var cmas=new Date(2023, 1,1);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");



window.onload = function() {
    let  showit = document.querySelector("#daysleft");
    let Today = new Date();
    let boardMonth =new Date(2023, 2,23);
    
    if (Today.getMonth()==11 && Today.getDate()>25) 
    {
    cmas.setFullYear(boardMonth.getFullYear()+1); 
    }  
    
    let fullday = 1000*60*60*24;
    
    let final = (Math.ceil((boardMonth.getTime()-Today.getTime())/(fullday)));
    document.getElementById("daysleft").innerHTML= final;
}
