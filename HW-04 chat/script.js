const websocket = new WebSocket('ws://echo.websocket.org/');
const mainBox = document.getElementById('mainBox');
const mainInput = document.getElementById('mainInput');
const send_btn = document.getElementById('send-btn');
const geo_btn = document.getElementById('geo-btn');
let firstMessagEcho = true;

function addMessage(message, isUser = false) {
    const elMessage = document.createElement('p');
    elMessage.textContent = message;
    if (isUser) {
        elMessage.classList.add('request')
    } else {
        elMessage.classList.add('reply')
    };
    mainBox.appendChild(elMessage);
    mainBox.scrollTop = mainBox.scrollHeight;
};
websocket.addEventListener('message', (event) => {
    const reply = event.data;
    if (firstMessagEcho) {
        console.log(reply)
        firstMessagEcho = false;
        return;
    }
    addMessage(reply);
});
function requestFn() {
    const request = mainInput.value.trim();
    if (request) {
        addMessage(request, true);
        websocket.send(request);
        mainInput.value = '';
    }};
send_btn.addEventListener('click', requestFn)
document.addEventListener('keydown', (event) => {
if(event.key === 'Enter' && document.activeElement === mainInput){
    requestFn();
}});
const geoSuccess = (position) => {
    const elLink = document.createElement('a');
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    elLink.href = url;
    elLink.textContent = 'Гео-локация'
    elLink.classList.add('request')
    elLink.target = '_blank';
    mainBox.appendChild(elLink);
    mainBox.scrollTop = mainBox.scrollHeight;
};
geo_btn.addEventListener('click', () => 
navigator.geolocation.getCurrentPosition(geoSuccess, geoError));
const geoError = () => {
    mainInput.value = 'Не получилось получить геопозицию';
};
websocket.addEventListener('error', (event) => {
    console.log('Ошибка ВебСокета', event);
});
websocket.addEventListener('close', () => {
    console.log('Соединение с ВебСокетом закрыто')
});

