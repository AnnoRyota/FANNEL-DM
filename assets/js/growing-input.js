var div = document.querySelector('#ta-frame');
var inner = document.querySelector('#ta-inner');
var ta = document.querySelector('textarea');

ta.addEventListener('keydown', autosize);

function autosize() {
  setTimeout(function () {
    ta.style.cssText = 'height:0px'; // 文字を削除した場合にscrollHeightを縮めるためにこれが必要
    ta.style.cssText = 'border-radius:50px';
    var height = Math.min(22 * 4, ta.scrollHeight);
    div.style.cssText = 'height:' + height * 1.75 + 'px';
    inner.style.cssText = 'height:' + height + 'px';
    ta.style.cssText = 'height:' + height + 'px';
  }, 0);
}