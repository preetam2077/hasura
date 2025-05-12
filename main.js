const spinbtn = document.getElementById("mainbtn")
let balance = 1000
let bal = document.getElementById("bal")
bal.textContent = "$"+String(balance)
let bdown = false       

const nodivs = document.getElementsByClassName("nodiv")

const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")

let canCall = false
let isGoodInput = true;

let inp = document.getElementById("inp")


inp.addEventListener('keyup', goodInp)

let betAmount = inp.value

function goodInp(){
    if(String(inp.value).includes(".")){
        console.log("Invalidddd")
        inp.style.backgroundColor = "red";
        isGoodInput = false
    }
    else{
        inp.style.backgroundColor = "#252525";
        console.log("valid")
        isGoodInput = true
    }
}

function balUp(){
    bal.textContent = "$" + String(balance)
    bal.style.fontSize = `${32-bal.textContent.length}px`
    console.log("updated")
    bdown = false
}

function didwin(bet){
        if(nodivs[0].childNodes[0].textContent === nodivs[1].childNodes[0].textContent && nodivs[0].childNodes[0].textContent ===  nodivs[2].childNodes[0].textContent){
            bet = Number(bet)
            console.log(typeof bet, "is the type of bet")
            spinbtn.classList.remove("spinbtn-active")
            
            balance += bet
            balUp()
            console.log("you won")
            
        }else{
            console.log(bet)
            spinbtn.classList.remove("spinbtn-active")
            balance -= bet
            balUp()
            console.log("you lost")
        }
}

function spun(){
    console.log("clicked")
    let betAmount = inp.value
    if(bdown == false && isGoodInput  && betAmount <= balance && balance > 0){
        bdown = true
        console.log(bdown)
        spinbtn.classList.add("spinbtn-active")

        
        if (betAmount == 0 || String(betAmount)== '' ) {
            betAmount = Number(betAmount)
            console.log(typeof betAmount)
            betAmount = 50
        }else{
            betAmount = betAmount
        }


        
        for(let nodiv of nodivs){
            nodiv.childNodes[0].style.animationName = "slidedown"
            nodiv.childNodes[0].style.animationDuration = "0.5s"
            nodiv.childNodes[0].style.animationTimingFunction = "ease-in-out"
            // nodiv.childNodes[0].textContent = Math.floor(Math.random()*8)
        }

        setTimeout(function (){
            let n1 = Math.floor(Math.random()*7)+1
            let n2
            let n3
            let weight = Math.round(Math.random() * 10) / 10
            if (weight <0.5){
                console.log("weight is", weight)
                n2 = n1;
                n3 = n1;
            }else{
                console.log("weight is", weight)
                n2 = Math.floor(Math.random()*7)+1
                n3 = Math.floor(Math.random()*7)+1
            }
            nodivs[0].childNodes[0].textContent = n1
            nodivs[1].childNodes[0].textContent = n2
            nodivs[2].childNodes[0].textContent = n3
        }, 250)

        inp.style.animationName = "shine"
        inp.style.animationDuration = "0.5s"
        inp.style.animationTimingFunction = "ease-in-out"

        setTimeout(function(){
            for(let nodiv of nodivs){
            nodiv.childNodes[0].style.animationName = "slideup"
            nodiv.childNodes[0].style.animationDuration = "0.5s"
            nodiv.childNodes[0].style.animationTimingFunction = "ease-in-out"
            
            // nodiv.childNodes[0].textContent = Math.floor(Math.random()*7)+1
            inp.style.animationName = "none"
            canCall=true
            }
        }, 350)
        
        
        setTimeout(function(){
            if(canCall){didwin(betAmount)}
            canCall= false 
            
        }, 3000)
    }
    
}



spinbtn.addEventListener("click", spun)
