const keys = document.querySelector('.calculator-keys')
keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return

  const key = event.target
  console.log(key.textContent)
})