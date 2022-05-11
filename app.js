const explore = document.querySelector('#explore')
const popoutBtn = document.querySelector('#popout-button')
const leftContainer = document.querySelector('#left-container')
const popoutContainer = document.querySelector('#popout-container')
const exit = document.querySelector('#exit')
const popoutContent = document.querySelector('#popout-content')

window.onload = () => {
  setTimeout(() => {
    explore.classList.add('on-load')
  }, 400);
}

popoutBtn.addEventListener('click', () => {
  leftContainer.classList.add('hide')
  popoutContainer.classList.add('popout')
  setTimeout(() => {
    popoutContent.classList.add('appear')
  }, 375);
})

exit.addEventListener('click', () => {
  popoutContainer.classList.remove('popout')
  popoutContainer.classList.add('popout-hide')
  popoutContent.classList.add('hide')
  popoutContent.classList.remove('appear')
  setTimeout(() => {
    leftContainer.classList.remove('hide')
  }, 250);
  setTimeout(() => {
    popoutContainer.classList.remove('popout-hide')
  }, 250);
})