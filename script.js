window.onload = function() {
    let showing = document.querySelector("#daysleft");
    let today = new Date();
    let boardMonth = new Date(2023, 1, 23);
  
    if (today.getMonth() === 11 && today.getDate() > 25) {
        today.setFullYear(boardMonth.getFullYear() + 1);
    }

    let fullday = 1000 * 60 * 60 * 24;
    let final = Math.ceil((boardMonth.getTime() - today.getTime()) / fullday);
    document.getElementById("daysleft").innerHTML = final;

    if (final < 25) {
        document.body.style.backgroundColor = "#F40B00";
    }
}
