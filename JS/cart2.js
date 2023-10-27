const form = document.getElementById('myform');

form.addEventListener('submit'), (event) => {
    event.preventDefault();

    const fname = form.element.name.value;
    const lname = form.element.name.value;
    const email = form.element.email.value;
    const enquries = form.element.enquries.value;
    const submit = form.element.submit.value;

    if(fname && lname && email && enquries && submit){
        //Form is valid. do something here
    } else{
        //Form is invalid, display an error message
    }
}
