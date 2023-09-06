const validation = (userData) => {
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email= "Email inválido";
    };
    
    if(!userData.email){
        errors.email = "Debe ingresar un email";
    };
    
    if(userData.email.length > 35){
        errors.email = "No puede tener más de 35 caracteres"
    };
    
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "La contraseña debe contener al menos un número"
    };
    
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    };

    return errors;
}

export default validation;
