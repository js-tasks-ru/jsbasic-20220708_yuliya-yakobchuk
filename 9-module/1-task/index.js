export default function promiseClick(button) {
  return new Promise((resolve, reject) => {
    button.addEventListener('click', (a) => {
      resolve(a);
    }, {once: true});
  });
}
