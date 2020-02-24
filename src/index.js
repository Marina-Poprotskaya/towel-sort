module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix)){
  let newArr = [];
  for (let i=1; i<matrix.length; i=i+2) {
    matrix[i]=matrix[i].reverse();
  }
  return newArr = matrix.flat();
}
return newArr = [];
}
