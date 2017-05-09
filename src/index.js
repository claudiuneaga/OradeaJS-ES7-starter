import * as Consts from './example';

const getVal = async () => await Consts.asyncFunc();
console.log(Consts.message);
console.log(getVal())
