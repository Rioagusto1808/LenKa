function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === "") {
        error.email = "Email Tidak Boleh Kosong !"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Tidak Cocok !"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password Tidak Boleh Kosong !"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password Tidak Cocok !"
    }else {
        error.password = ""
    }
    return error;
}

export default Validation;