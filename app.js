//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const sneaker = document.querySelector('.sneaker img');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
   console.log(e.pageX, e.pageY);
   let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //Popout
    // sneaker.style.transform = 'translateZ(100px) rotateZ(-15deg)'
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    // sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
});