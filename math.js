function generateNumber(){
    
    const min = Math.ceil(document.querySelector("#n1").value)

    const max = Math.floor(document.querySelector("#n2").value)

    const resultP = document.querySelector(".result")

    const result = Math.floor(Math.random() * (max - min + 1) + min)
    
    resultP.innerHTML = result
    
}