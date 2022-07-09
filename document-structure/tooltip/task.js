
document.querySelectorAll('.has-tooltip').forEach(item => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    item.after(tooltip);

    item.addEventListener('click', (event) => {
 
    const { top, left } = item.getBoundingClientRect() 
    if (tooltip.textContent === event.currentTarget.title) { 
        tooltip.classList.toggle('tooltip_active');
    } else {
        tooltip.textContent = event.currentTarget.title;
        tooltip.setAttribute('data-position', 'bottom');
        tooltip.setAttribute('style', `left: ${left}px; top: ${top + 20}px;`)
        tooltip.classList.add('tooltip_active');
    }
    event.preventDefault();
    })
});