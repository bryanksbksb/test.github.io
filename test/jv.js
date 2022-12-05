const container = document.querySelector('.container');
const container1 = document.querySelector('.container1');


document.querySelector('.slider').addEventListener
('input', (e) =>{
  container.style.setProperty('--position', `${e.target.value}%`);
})

document.querySelector('.slider1').addEventListener
('input', (e) =>{
  container1.style.setProperty('--position1', `${e.target.value}%`);
})

