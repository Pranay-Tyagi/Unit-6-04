document.querySelector('.calculate').addEventListener('click', function () {
  a = document.querySelector('.a').value
  a = parseInt(a)
  b = document.querySelector('.b').value
  b = parseInt(b)
  height = document.querySelector('.height').value
  height = parseInt(height)
  area = ((a+b)/2)*height
  alert(area)
})
