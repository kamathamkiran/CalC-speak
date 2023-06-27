var screen = document.querySelector('#screen');

// read string
function playSound(inputString) {
  // Create a new SpeechSynthesisUtterance object
  var utterance = new SpeechSynthesisUtterance();

  // Set the text to be spoken
  utterance.text = inputString;

  // Set the rate to control the speed of speech
  utterance.rate = 3;

  // Use the SpeechSynthesis API to speak the text
  window.speechSynthesis.speak(utterance);
}

function insert(value) 
{
  if(value == "-")playSound("minus");
  else if(value == "*")playSound("into");
  else if(value == "/")playSound("divided by");
  else if(value == "3.14159265359")playSound("pi");
  else if(value == "2.71828182846")playSound("e");
  else if(value == "%")playSound("mod");
  else if(value == ".")playSound("point");
  else playSound(value);
  screen.value += value;
}
function sin()
{
  playSound("sine");
  screen.value = Math.sin(eval(screen.value));
  playSound("answer is" + screen.value);
}
function cos()
{
  playSound("cos");
  screen.value = Math.cos(eval(screen.value));
  playSound("answer is" + screen.value);
}
function tan()
{
  playSound("tan");
  screen.value = Math.tan(eval(screen.value));
  playSound("answer is" + screen.value);
}
function asin()
{
  playSound("sine inverse");
  screen.value = Math.asin(eval(screen.value));
  playSound("answer is" + screen.value);
}
function acos()
{
  playSound("cos inverse");
  screen.value = Math.acos(eval(screen.value));
  playSound("answer is" + screen.value);
}
function atan()
{
  playSound("tan inverse");
  screen.value = Math.atan(eval(screen.value));
  playSound("answer is" + screen.value);
}
function power()
{
  playSound("power of 2");
  screen.value = Math.pow(eval(screen.value),2);
  playSound("answer is" + screen.value);
}
function sqrt()
{
  playSound("square root");
  screen.value = Math.sqrt(eval(screen.value));
  playSound("answer is" + screen.value);
}
function log()
{
  playSound("log");
  screen.value = Math.log(eval(screen.value));
  playSound("answer is" + screen.value);
}
function factorial()
{
  playSound("factorial");
    var res = 1, num = eval(screen.value), i;
    for(i = 1; i <= num; i++)
    {
       res = res*i;
    }
    screen.value = res;
    playSound("answer is" + screen.value);
}
function back()
{
    screen.value = screen.value.substr(0,screen.value.length-1);
}
function calculate()
{
  screen.value = eval(screen.value);
  playSound("answer is" + screen.value);
}
function clearAll()
{
  playSound("clear");
  screen.value = ''; 
}
