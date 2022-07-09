const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

hasTooltip.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
  const { top, left } = item.getBoundingClientRect() 
  
  if(tooltip.textContent === e.currentTarget.title) { 
    tooltip.classList.toggle('tooltip_active');
  } else {
    tooltip.textContent = e.currentTarget.title;
    tooltip.style.top = (top + 20 + 'px');
    tooltip.style.left = (left + 'px');
    tooltip.classList.add('tooltip_active');
  }
}));