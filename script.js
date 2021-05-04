document.querySelector('.calculate').addEventListener('click', function () {
  a = document.querySelector('.a').value
  b = document.querySelector('.b').value
  height = document.querySelector('.height').value
  a = parseInt(a)
  b = parseInt(b)
  height = parseInt(height)
  area = (a + b) / 2 * height
  alert(area)
})
