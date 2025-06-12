let currentActiveButton = null;

function showPopup(title, content) {
  // 移除之前按鈕的 pending 狀態
  if (currentActiveButton) {
    currentActiveButton.classList.remove('pending');
  }

  // 設置新按鈕為 pending 狀態
  currentActiveButton = document.querySelector(`button[onclick*="${title.replace(/'/g, "\\'")}"]`);
  currentActiveButton.classList.add('pending');

  // 顯示彈出視窗
  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-content').innerText = content;
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.querySelector('.confirm-btn').style.display = 'block';
}

function hidePopup() {
  // 確認後將按鈕狀態改為 confirmed
  if (currentActiveButton) {
    currentActiveButton.classList.remove('pending');
    currentActiveButton.classList.add('confirmed');
    
    // 如果是聯絡方式，則跳轉到 red.html
    if (document.getElementById('popup-title').innerText === '聯絡方式') {
      window.location.href = 'red.html';
      return; // 防止後續代碼執行
    }
    
    currentActiveButton = null;
  }

  // 隱藏彈出視窗
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('.confirm-btn').style.display = 'none';
}