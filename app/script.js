const refEl = document.querySelectorAll('.block');

console.log(refEl);

// refEl.addEventListener('click');

const blockEl = document.getElementsByClassName('block');

console.log(blockEl);

// for (let i = 0; i < refEl.length; i += 1) {
//   refEl[i].addEventListener('click', () => {
//     console.log('work');
//   });
// }
// for (let i = 0; i < refEl.length; i += 1) {
//   refEl[i].addEventListener('click', click);
// }

refEl.forEach((el) => {
  console.log(el);
  el.addEventListener('click', click);
});

function click() {
  //   console.log('work');
  console.log(this.innerHTML);
  this.style.background = 'green';
}
