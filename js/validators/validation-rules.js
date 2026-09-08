const ValidationRules = {

    required(value) {
        return value.trim() !== "";
    },

    minLength(value, length) {
        return value.trim().length >= length;
    },

    maxLength(value, length) {
        return value.trim().length <= length;
    },

    onlyLetters(value) {
        return /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/
            .test(value.trim());
    },

    onlyNumbers(value) {
        return /^\d+$/.test(value.trim());
    },

    phone(value) {
        return /^\d{8,15}$/.test(
            value.trim()
        );
    },

    fullName(value) {
        return /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(\s+[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)+$/
            .test(value.trim());
    }
};