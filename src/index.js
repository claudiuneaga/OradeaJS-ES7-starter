import * as Consts from './example';

const getVal = async () => await Consts.getValue();
console.log(Consts.message);
console.log(getVal().then(v => console.log(v)));
