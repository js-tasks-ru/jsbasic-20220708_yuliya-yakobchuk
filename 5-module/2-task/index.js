function toggleText() {
  const clickBtn = document.querySelector(".toggle-text-button");
  const text = document.querySelector('#text');
 
    clickBtn.addEventListener("click", handler);
 
    function handler() {
        text.hidden = !text.hidden;
    }
}
