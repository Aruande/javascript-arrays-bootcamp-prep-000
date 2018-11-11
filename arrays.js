var chocolateBars= ["snickers","hundred grand","kitkat","skittles"];
  var moreCandy = "twix"
function addElementToBeginningOfArray(chocolateBars, moreCandy){
  return [moreCandy, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreCandy){
  chocolateBars.unshift(moreCandy);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, moreCandy){
  return [...chocolateBars, moreCandy];
}
