document.querySelector('.calculate').addEventListener('click', function () {
  let a = document.querySelector('.a').value
  let b = document.querySelector('.b').value
  let height = document.querySelector('.height').value
  a = parseFloat(a)
  b = parseFloat(b)
  height = parseFloat(height)
  const area = (a + b) / 2 * height
  alert(area)
})
