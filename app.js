let name = prompt("Buraya Adınız Giriniz : ")

let firstName = document.querySelector("#myName")
firstName.innerHTML = `${name}`

setInterval(digitalClock,1000)

function digitalClock() {
  
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"]
    let day = days[time.getDay()];

    hour=(hour<10)? "0"+hour:hour;
    minute=(minute<10)? "0"+minute:minute;
    second=(second<10)? "0"+second:second;

    var zaman = hour +  ":" +minute + ":" + second + " " + day;
    var saat = document.querySelector("#myClock").innerHTML = zaman

}

