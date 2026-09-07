const OrderFormRules = {

    name: [
        {
            validate: ValidationRules.required,
            message: "El nombre es obligatorio."
        },
        {
            validate: ValidationRules.onlyLetters,
            message: "El nombre solo puede contener letras."
        },
        {
            validate: (value) =>
                ValidationRules.minLength(value, 2),
            message: "El nombre debe tener al menos 2 caracteres."
        },
        {
            validate: (value) =>
                ValidationRules.maxLength(value, 50),
            message: "El nombre no puede superar los 50 caracteres."
        }
    ],

    lastname: [
        {
            validate: ValidationRules.required,
            message: "El apellido es obligatorio."
        },
        {
            validate: ValidationRules.onlyLetters,
            message: "El apellido solo puede contener letras."
        },
        {
            validate: (value) =>
                ValidationRules.minLength(value, 2),
            message: "El apellido debe tener al menos 2 caracteres."
        },
        {
            validate: (value) =>
                ValidationRules.maxLength(value, 50),
            message: "El apellido no puede superar los 50 caracteres."
        }
    ],

    address: [
        {
            validate: ValidationRules.required,
            message: "La dirección es obligatoria."
        },
        {
            validate: (value) =>
                ValidationRules.minLength(value, 5),
            message: "La dirección debe tener al menos 5 caracteres."
        },
        {
            validate: (value) =>
                ValidationRules.maxLength(value, 100),
            message: "La dirección no puede superar los 100 caracteres."
        }
    ],

    phone: [
        {
            validate: ValidationRules.required,
            message: "El celular es obligatorio."
        },
        {
            validate: ValidationRules.phone,
            message: "Ingresá un número de celular válido."
        }
    ],

    remarks: [
        {
            validate: (value) =>
                ValidationRules.maxLength(value, 250),
            message: "Las aclaraciones no pueden superar los 250 caracteres."
        }
    ]
};