const versions = 'ES6/ES7';
const message = `Now you can write ${versions}`;
const getValue = () => new Promise(resolve => {
    setTimeout(() => { resolve(42); }, 1000);
});

export { versions, message, getValue }
