const input = document.querySelector("#validation-input");
const dataLengthValue = input.getAttribute("data-length");


input.addEventListener('blur',сharacters );

function сharacters(event) {
   
    event.currentTarget.value.length === Number(dataLengthValue)  ? input.classList.replace("invalid", "valid") :
        input.classList.add("invalid");

}



