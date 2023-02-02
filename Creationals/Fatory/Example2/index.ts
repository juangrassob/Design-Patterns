import ChairFactory from './chairFactory';

const smallChair = ChairFactory.getChair('s');
const mediumChair = ChairFactory.getChair('m');
const bigChair = ChairFactory.getChair('l');

const smallChairDimensions = smallChair.getDimensions();
const mediumChairDimensions = mediumChair.getDimensions();
const biChairDimensions = bigChair.getDimensions();

console.log(smallChairDimensions);
console.log(mediumChairDimensions);
console.log(biChairDimensions);
