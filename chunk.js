const chunk = (inputArray, perChunk) => {
var result = inputArray.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)
console.log(index);
  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

return (result); // result: [['a','b'], ['c','d'], ['e']]

};



console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6], 2)); // [[2, 4], [2, 5], [3, 6]]
console.log(chunk([2, 4, 2, 5, 3, 6, 3], 1)); // [[2], [4], [2], [5], [3], [6], [3]]
console.log(chunk([2, 4, 2, 5], 5)); // [[2, 4, 2, 5]]
console.log(chunk([2, 2], 3)); // [[2, 2]]
