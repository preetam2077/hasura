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

let inp = document.getElementById("inp")


inp.addEventListener('keyup', goodInp)





function balUp(){
    bal.textContent = "$" + String(balance)
    console.log("updated")
    bdown = false
}

function didwin(){
        if(nodivs[0].childNodes[0].textContent === nodivs[1].childNodes[0].textContent === nodivs[2].childNodes[0].textContent){
            console.log("Won!")
            spinbtn.classList.remove("spinbtn-active")
            // balance += 50
            balUp()
            
        }else{
            console.log("Lost!")
            spinbtn.classList.remove("spinbtn-active")
            // balance -= 50
            balUp()
        }
}

function spun(){
    console.log("clicked")
    if(bdown == false){
        bdown = true
        console.log(bdown)
        spinbtn.classList.add("spinbtn-active")

        let betAmount = inp.value
        if (betAmount == 0 || String(betAmount)== ''){
            balance-=50
        }else{
            balance -= betAmount
        }


        
        for(let nodiv of nodivs){
            nodiv.childNodes[0].style.animationName = "slidedown"
            nodiv.childNodes[0].style.animationDuration = "0.5s"
            nodiv.childNodes[0].style.animationTimingFunction = "ease-in-out"
            // nodiv.childNodes[0].textContent = Math.floor(Math.random()*8)
        }

        inp.style.animationName = "shine"
        inp.style.animationDuration = "0.5s"
        inp.style.animationTimingFunction = "ease-in-out"

        setTimeout(function(){
            for(let nodiv of nodivs){
            nodiv.childNodes[0].style.animationName = "slideup"
            nodiv.childNodes[0].style.animationDuration = "0.5s"
            nodiv.childNodes[0].style.animationTimingFunction = "ease-in-out"
            nodiv.childNodes[0].textContent = Math.floor(Math.random()*7)+1
            inp.style.animationName = "none"
            canCall=true
        }}, 350)
        
        setTimeout(function(){
            if(canCall){didwin()}
            canCall= false
        }, 3000)
    }
    
}



spinbtn.addEventListener("click", spun)
