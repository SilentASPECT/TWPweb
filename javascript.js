function clickService(serviceId) {
    var service = document.getElementById(serviceId);
    var serviceDetails = service.querySelector('.service-details');
    serviceDetails.style.display = (serviceDetails.style.display === 'block') ? 'none' : 'block';
}


const mBtn = document.querySelector('.menuBtn');
const mBtnIcon = document.querySelector('.menuBtn i');
const dpMenu = document.querySelector('.dropdown');

mBtn.onclick = function (){
    dpMenu.classList.toggle('open');
    const isOpen = dpMenu.classList.contains('open');
    mBtnIcon.classList = isOpen ? 'fa-solid fa-xmark':'fa fa-bars';
}