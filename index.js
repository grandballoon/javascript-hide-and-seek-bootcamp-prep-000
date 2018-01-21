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
  var deepElement = document.getElementById('grand-node');
  var nextNode = deepElement.children[0];
  var currentNode;
  while (nextNode) {
      currentNode = nextNode;
      nextNode = nextNode.children[0];
  } //while loop end
return currentNode;
} // function end
