var screen = document.querySelector('#screen');

function insert(value) 
{
  screen.value += value;
}
function sin()
{
  screen.value = Math.sin(eval(screen.value));
}
function cos()
{
  screen.value = Math.cos(eval(screen.value));
}
function tan()
{
  screen.value = Math.tan(eval(screen.value));
}
function asin()
{
  screen.value = Math.asin(eval(screen.value));
}
function acos()
{
  screen.value = Math.acos(eval(screen.value));
}
function atan()
{
  screen.value = Math.atan(eval(screen.value));
}
function power()
{
  screen.value = Math.pow(eval(screen.value),2);
}
function sqrt()
{
  screen.value = Math.sqrt(eval(screen.value));
}
function log()
{
  screen.value = Math.log(eval(screen.value));
}
function factorial()
{
    var res = 1, num = eval(screen.value), i;
    for(i = 1; i <= num; i++)
    {
       res = res*i;
    }
    screen.value = res;
}
function back()
{
    screen.value = screen.value.substr(0,screen.value.length-1);
}
function calculate()
{
  screen.value = eval(screen.value);
}
function clearAll()
{
  screen.value = ''; 
}

console.log(eval('2+3'));
