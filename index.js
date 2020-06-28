// Your code here
function mapToNegativize(sourceArray){
  const result = [];
  sourceArray.forEach(elem => result.push(elem * -1));
  return result;
}
function mapToNoChange(sourceArray){
  const result = [];
  sourceArray.forEach(elem => result.push(elem ));
  return result;
}
