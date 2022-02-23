module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const currSymbol = str[i];
    let topEl = stack[stack.length - 1];

    for (let p = 0; p < bracketsConfig.length; p++) {
      const pair = bracketsConfig[p];

      if (currSymbol === pair[0] && currSymbol === pair[1]) {

        if (topEl === currSymbol) stack.pop();
        else stack.push(currSymbol);
        
      } else {

        if (currSymbol === pair[0]) stack.push(currSymbol);

        if (currSymbol === pair[1]) {
          if (topEl !== pair[0] || stack.pop() === undefined) {
            return false;
          }
        }
      }
    }
  }
  return stack.length === 0;
}
