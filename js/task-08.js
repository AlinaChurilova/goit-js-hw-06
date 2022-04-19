const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.currentTarget.elements.email.value.length && event.currentTarget.elements.password.value.length ?  event.preventDefault() :
        alert(`Все поля должны быть заполнены!`);
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email, password
    }

    console.log(formData);
    event.currentTarget.reset();
}
