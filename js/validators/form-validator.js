const FormValidator = {

    validate(form, rules) {
        const errors = {};

        Object.keys(rules).forEach(
            (fieldName) => {

                const field =
                    form.elements[fieldName];

                if (!field) return;

                const error =
                    this.validateField(
                        field.value,
                        rules[fieldName]
                    );

                if (error) {
                    errors[fieldName] = error;
                }
            }
        );
        return errors;
    },

    validateField(value, rules) {
        for (const rule of rules) {
            if (!rule.validate(value)) {
                return rule.message;
            }
        }
        return null;
    },

    isValid(errors) {
        return Object.keys(errors).length === 0;
    }
};
