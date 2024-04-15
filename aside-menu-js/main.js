const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')

const showSideMenu = () => nav.classList.toggle('show')
menuBtn.addEventListener('click', showSideMenu)