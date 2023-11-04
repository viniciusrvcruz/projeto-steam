<script>
    export function validationName(name) {
        if(name.trim() !== '') {
            return true
        } else {
            return false
        }
    }

    export function validationEmail(email) {
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        )

        if(email.trim() !== '' && emailRegex.test(email))  {
            return true
        } else {
            email = ''
            return false
        }
    }

    export function validationPhone(phone) {
        const phoneRegex = /^\d{11}$/

        if(phone.trim() !== '' && phoneRegex.test(phone)) {
        return true
        } else {
            return false
        }
    }

    export function validationAddress(address) {
        if(address.trim() !== '') {
            return true
        } else {
            address
            return false
        }
    }

    export function validationCpf(cpf) {
        if(cpf.trim() !== '') {
            cpf = cpf.replace(/[^\d]/g, ''); // Remove all non-numeric characters
            if (cpf.length !== 11) {
                cpf = ''
                return false; // The CPF must have 11 digits
            }

            // Checks if all digits are the same (invalid CPF, but can pass size validation)
            if (/^(\d)\1+$/.test(cpf)) {
                cpf = ''
                return false;
            }

            // Calculates the first check digit
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += parseInt(cpf.charAt(i)) * (10 - i);
            }
            let remainder = 11 - (sum % 11);
            let firstDigit = (remainder === 10 || remainder === 11) ? 0 : remainder;

            // Calculates the second check digit
            sum = 0;
            for (let i = 0; i < 10; i++) {
                sum += parseInt(cpf.charAt(i)) * (11 - i);
            }
            remainder = 11 - (sum % 11);
            let secondDigit = (remainder === 10 || remainder === 11) ? 0 : remainder;

            // Verifies that the calculated check digits match the original check digits
            if (parseInt(cpf.charAt(9)) === firstDigit && parseInt(cpf.charAt(10)) === secondDigit) {
                return true; // CPF valid
            } else {
                cpf = ''
                return false; // CPF invalid
            }
        } else {
            cpf = ''
            return false
        }
    }

    export function validationPayment(payment) {
            if(payment !== '') {
                return true
            } else {
                return false
            }
    }

    export function validationAgreement(agreement) {
        if(agreement === true) {
            return true
        } else {
            return false
        }
    }
</script>