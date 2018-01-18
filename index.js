function getFirstSelector(selector) {
  var answer = document.querySelector(selector);
  return answer
}

function nestedTarget (target) {
var solution = document.getElementById('nested').querySelector('.target')
return solution;
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    var number = parseInt(lis[i].innerHTML, 10);

    lis[i].innerHTML = (number + n);
  }
}

function deepestChild () {
  var deepElement = document.querySelectorAll('div#grand-node');
  var currentNode = ""
  while (deepElement[0].firstChild {
    if(deepElement[0].childNodes.length = 1) {
      return deepElement[0].children[0]
    } // first if statement end
    if (deepElement[0].childNodes.length > 1) {
      for (let i = 0; i < deepElement.length; i++) {
          currentNode.push(deepElement[i].children[0])
      }

    } // second if statement end

  } //while loop end

} // function end
