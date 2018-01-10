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
