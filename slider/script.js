const prevBtn = document.querySelector('.leftArrow');
const nextBtn = document.querySelector('.rightArrow');
const dots = document.querySelectorAll('.dot');
const names = document.querySelectorAll('.name')
const img0 = document.getElementById('img0');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
let slides = [img0, img1, img2];
let currentIndex = 0;
const projectsInfo = [{
    description: 'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
    city: 'Rostov-on-Don',
    district: 'LCD admiral',
    repTime: '3.5 months',
    apartArea: '81 m2',
    repCost: 'Upon request',
},
{
    description: 'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
    city: 'Sochi',
    district: 'Thieves',
    repTime: '4 months',
    apartArea: '105 m2',
    repCost: 'Upon request', 
},
{
    description: 'Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families',
    city: 'Rostov-on-Don',
    district: 'Patriotic',
    repTime: '3 months',
    apartArea: '93 m2',
    repCost: 'Upon request',
}]
const descriptionText = document.querySelector('.leftDiv__varblocks-text');
const cityText = document.querySelector('.VB_city-text');
const districtText = document.querySelector('.VB_city_district-text')
const repTimeText = document.querySelector('.VB_repTime-text');
const apartAreaText = document.querySelector('.VB_apartArea-text');
const repCostText = document.querySelector('.VB_repCost-text');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    names.forEach((name, index) => {
        name.classList.toggle('active', index === currentIndex);
    });
    const currentProject = projectsInfo[currentIndex];
    descriptionText.textContent = currentProject.description;
    cityText.textContent = currentProject.city;
    districtText.textContent = currentProject.district;
    repTimeText.textContent = currentProject.repTime;
    apartAreaText.textContent = currentProject.apartArea;
    repCostText.textContent = currentProject.repCost;
};
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});
names.forEach((name, index) => {
    name.addEventListener('click', () => {
        currentIndex = index;
        updateSlider()
    })
});
updateSlider();