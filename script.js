function calculateLove(){

    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    let loading = document.getElementById("loading");
    let percent = document.getElementById("percent");
    let bar = document.getElementById("bar");
    let message = document.getElementById("message");

    if(name1 === "" || name2 === ""){
        alert("Please enter both names.");
        return;
    }

    loading.innerHTML = " Calculating Love...";

    percent.innerHTML = "";
    bar.style.width = "0%";
    message.innerHTML = "";

    setTimeout(() => {

        let love = Math.floor(Math.random() * 101);

        percent.innerHTML = love + "%";
        bar.style.width = love + "%";

        if(love >= 90){
            message.innerHTML = " Soulmates Forever!";
        }
        else if(love >= 70){
            message.innerHTML = "Perfect Couple!";
        }
        else if(love >= 50){
            message.innerHTML = " Great Match!";
        }
        else if(love >= 30){
            message.innerHTML = " Good Friends!";
        }
        else{
            message.innerHTML = " Better Luck Next Time!";
        }

        loading.innerHTML = "";

    }, 2000);
}

function resetLove(){

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";

    document.getElementById("percent").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("loading").innerHTML = "";
    document.getElementById("bar").style.width = "0%";
}