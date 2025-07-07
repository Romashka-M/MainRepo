function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}
document.getElementById('btn2').addEventListener ('click', function() {
    this.style.display = 'none';
    showLoader();
    const catApi = 'https://api.thecatapi.com/v1/images/search?limit=10';
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    setTimeout(() => {
    fetch(catApi, {
        method: 'GET'
    })
    .then((response) => {
        return response.json()
})
    .then((data) => {
        data.forEach(el => {
            const catUrl = el.url;
            const catImg = document.createElement('img');
            catImg.src = catUrl;
            catImg.alt = 'Картинка с котиком';
            gallery.appendChild(catImg);        
        });
    })
    .catch((e) => console.log(e), galleryInnerHTML = '<p class="loader" id="loader"> Ошибка загрузки котиков :/<br>Попробуйте обновить страницу</p>'
)
    .finally(hideLoader())},5000)
})
