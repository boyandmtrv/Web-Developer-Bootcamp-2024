// const login = async (username, password) => {
//     if (!username || !password) {
//         throw 'Missing Credentials!'
//     };

//     if (password === '12345') {
//         return 'Welcome'
//     };

//     throw 'Invalid password'
// };

// login('something here', '12345')
//     .then(msg => {
//         console.log('Logged in');
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log('Error!');
//         console.log(err);
//     });

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
};

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('purple', 1000))

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
}