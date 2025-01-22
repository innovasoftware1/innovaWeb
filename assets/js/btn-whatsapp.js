const tooltip = document.getElementById('tooltip');

function showTooltip() {
    tooltip.classList.add('show');
}

function hideTooltip() {
    tooltip.classList.remove('show');
}

setInterval(() => {
    showTooltip();
    setTimeout(hideTooltip, 5000);
}, 10000);

document.querySelector('.float').addEventListener('mouseover', showTooltip);
document.querySelector('.float').addEventListener('mouseout', hideTooltip);
