const versions = 'ES6/ES7';
const message = `Now you can write ${versions}`;
const asyncFunc = async () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve(42); }, 1000);
});

export { versions, message, asyncFunc }
