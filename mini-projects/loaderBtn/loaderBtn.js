const button = document.querySelector('.btn');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
let icon1Inline = true;
button.addEventListener('click', () => {
    if (icon1Inline) {
        icon1.style.display = 'none';
        icon2.style.display = 'inline';
    }  else {
        icon1.style.display = 'inline';
        icon2.style.display = 'none'; 
    }
    icon1Inline = !icon1Inline
});