function generateNumber(){
    
    const min = Math.ceil(document.querySelector("#n1").value)

    const max = Math.floor(document.querySelector("#n2").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min)
    
    alert(result)
}