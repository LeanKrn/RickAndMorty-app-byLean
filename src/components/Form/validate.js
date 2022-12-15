const validate = (inputs) => {
    let errors= {}

    const regexEmail = ""
    const regexPass = new RegExp(
        ""
    )

    if(!regexEmail.test(inputs.username)){
        errors.username="Name must be a valid email addres"
    }
    if(!inputs.username){
        errors.username = "add your name"
    }
    if(inputs.username.length > 35){
        errors.username ="Max length 35"
    }
    if(regexPass.test(inputs.password)){
        errors.password="add pass 6-10 characters";
    }
    return errors
}

export default validate;