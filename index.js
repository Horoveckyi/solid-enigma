const body = document.querySelector('#body');

body.addEventListener('click', event => {
  let x = event.x;
  let y = event.y;
  createBread(x, y)
})

function createBread(x, y) {
  const bread = document.createElement('div');
  bread.className = 'bread';
  bread.style.left = `${x}px`;
  bread.style.top = `${y}px`

  document.body.append(bread);
}
