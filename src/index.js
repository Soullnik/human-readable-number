module.exports = function toReadable (num) {
  const obj = {
    0: 'zero', 
    1: 'one', 
    2: 'two', 
    3: 'three', 
    4: 'four', 
    5: 'five', 
    6: 'six', 
    7: 'seven', 
    8: 'eight',
    9: 'nine', 
    10: 'ten', 
    11: 'eleven', 
    12: 'twelve', 
    13: 'thirteen', 
    14: 'fourteen', 
    15: 'fifteen',
    16: 'sixteen', 
    17: 'seventeen', 
    18: 'eighteen', 
    19: 'nineteen', 
    20: 'twenty', 
    30: 'thirty',
    40: 'forty', 
    50: 'fifty', 
    60: 'sixty', 
    70: 'seventy', 
    80: 'eighty', 
    90: 'ninety', 
    100: 'hundred'
  }

  if (num <= 20) return obj[num];
    let arrNum = [];
    let hundred = Math.floor(num / 100);
    num -= hundred * 100;
    if (hundred){
        hundred = obj[hundred] + ' hundred';
        if (num == 0) return hundred;
        arrNum.push(hundred);
    }
    if(num in obj) {
        arrNum.push(obj[num]);
        return arrNum.join(' ')};
    let doub = Math.floor(num / 10);
    arrNum.push(obj[doub * 10])
    let doublepath = num - doub * 10;
    arrNum.push(obj[doublepath]);
    return arrNum.join(' ');


}
