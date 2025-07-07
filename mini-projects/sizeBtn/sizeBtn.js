const button = document.querySelector('.btn');
const screenH = window.screen.height;
const screenW = window.screen.width;
button.addEventListener('click', () => {
    alert(`Ширина и высота вашего экрана ${screenW} и ${screenH} соответственно!`);
});
