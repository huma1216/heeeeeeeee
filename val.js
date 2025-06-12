document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 's.html';  // 直接跳轉到下一個網頁
  });
});
