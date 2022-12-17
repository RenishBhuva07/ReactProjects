import { useState } from 'react';

const ValidationHook = (initialValues,initialErrorValues) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrorValues);

    const handleInputChange = (event) =>{
        event.persist();
        if(event.target.type == "text"){
            if(event.target.value == ""){
                setErrors(errors => ({ ...errors, [event.target.name+"Error"]:"this field is required"}));
            }
            else{
                setErrors(errors => ({ ...errors, [event.target.name+"Error"]: "" }));
            }
        }
        else if(event.target.type == "email"){
            var Pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z]{2,4})$/;
            if(Pattern.test(event.target.value)){
                setErrors(errors => ({ ...errors, "emailError": ""}));
            }
            else{
                setErrors(errors => ({ ...errors, "emailError": "Invalid Email Formate"}));
            }
        }
        else if(event.target.type == "password"){
            if(event.target.value == ""){
                setErrors(errors => ({ ...errors, [event.target.name+"Error"]: "this field is required"}));
            }
            else{
                setErrors(errors => ({ ...errors, [event.target.name+"Error"]: ""}));
            }
        }
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    const checkValid = (event) =>{
        event.persist();
        if (event.target.type == "text" || event.target.type == "password") {
            if (event.target.value == "") {
                setErrors(errors => ({ ...errors, [event.target.name+"Error"]: "this field is required" }));                
            } else {
                setErrors(errors => ({ ...errors, [event.target.name+"Error"]: "" }));
            }
        }
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }

    return (
        handleInputChange,
        checkValid,
        inputs,
        errors
    );
};

export default ValidationHook;