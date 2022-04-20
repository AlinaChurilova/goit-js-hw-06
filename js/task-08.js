const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    email.length && password.length ?  event.preventDefault() :
        alert(`Все поля должны быть заполнены!`);
    

    const formData = {
        email, password
    }

    console.log(formData);
    event.currentTarget.reset();
}
