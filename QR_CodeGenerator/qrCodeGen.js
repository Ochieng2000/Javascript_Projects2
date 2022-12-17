const btn = document.querySelector([type = "button"]);
const container = document.querySelector(".container");
const qrInput = document.querySelector(".text");
qrImage = document.querySelector("img");

btn.addEventListener('click', () => {
    let qrValue  = qrInput.value;
    if(!qrValue) return;
    btn.innerText = "Generating QR Code...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener('load', () => {
        btn.innerText = "Generate QR Code";
        container.classList.add("active");
    })
    
})
qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove("active");
    }    
})