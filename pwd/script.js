let h1Element = document.getElementById('prank');
let inp = document.getElementById('inp');
let btn = document.getElementById('submit');
let count = 0;
let a = 0;

btn.onclick = function() {
  if (a === 0) {
    count1();
    a = 1;
  } else if (a === 1 && inp.value === 'incorrect') {
    count2();
    a = 2;
  }
};

function count1() {
  h1Element.innerHTML = 'Password is incorrect';
  h1Element.style.color = '#FF0000';
}

function count2() {
    inp.remove()
    btn.remove()
    h1Element.innerHTML = 'Get pranked';
    h1Element.style.alignItems = 'center';
    h1Element.style.color = '#000000';
    h1Element.style.fontSize = '100px';
    window.location.href = 'https://www.youtube.com/watch?v=8ybW48rKBME'
}