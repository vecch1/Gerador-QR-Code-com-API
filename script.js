const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")
// eventos

function generatorQRCode(){
    const qrCodeInputValue = qrCodeInput.value
  
    if(!qrCodeInputValue) return;

    qrCodeBtn.innertext = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active");
        qrCodeBtn.innertext = "Código criado"
    })
}


qrCodeBtn.addEventListener("click", () => {
    generatorQRCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generatorQRCode();
    }
})

// limpar area do qr code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innertext = "Gerar QR Code"
    }
})