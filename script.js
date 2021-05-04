document.querySelector('.calculate').addEventListener('click', function () {
  let a = document.querySelector('.a').value
  let b = document.querySelector('.b').value
  let height = document.querySelector('.height').value
  a = parseInt(a)
  b = parseInt(b)
  height = parseInt(height)
  let area = (a + b) / 2 * height
  alert(area)
})
