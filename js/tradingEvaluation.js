function toggleStyle() {
  const divElement = document.getElementById('myDiv');
  divElement.classList.toggle('clicked');

  const divElement1 = document.getElementById('myDiv1');
  divElement1.classList.remove('clicked');
}

function toggleStyle1() {
  const divElement = document.getElementById('myDiv1');
  divElement.classList.toggle('clicked');

  const divElement1 = document.getElementById('myDiv');
  divElement1.classList.remove('clicked');
}