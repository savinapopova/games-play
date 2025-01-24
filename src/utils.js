export function validateRegisterUser({email, password, confirmPassword}) {

    console.log(email, password, confirmPassword);

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        throw new Error('All fields are required!');
    }

    if (password !== confirmPassword) {
        throw new Error('Passwords don\'t match!');
    }

    return {email, password};
}

export function validateLoginrUser({email, password}) {

    if (email.trim() === '' || password.trim() === '') {
        throw new Error('All fields are required!');
    }

    return {email, password};
}

export function validateGame({title, category, maxLevel, imageUrl, summary}) {

    console.log('Game validating...');

    if (title.trim() === '' || category.trim() === '' || imageUrl.trim() === '' || summary.trim() === '') {
        throw new Error('All fields are required!');
    }

    if (maxLevel < 1 || isNaN(maxLevel)) {
        throw new Error('Max level must be a positive number!');
    }

    return {title, category, maxLevel, imageUrl, summary};
}
