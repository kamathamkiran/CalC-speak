let result = document.getElementById('result');

function insert(value) {
  result.value += value;
}

function clearAll() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}