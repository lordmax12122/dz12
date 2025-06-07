
function update() {
    const targetDate = new Date('December 11 2025');
    const now = new Date();
    const time = targetDate - now;

    const days = Math.floor(time / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0');
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, '0');
    const mins = Math.floor((time / 1000 / 60) % 60)
        .toString()
        .padStart(2, '0');
    const secs = Math.floor((time / 1000) % 60)
        .toString()
        .padStart(2, '0');

    document.querySelector('[data-value="days"]').textContent = days;
    document.querySelector('[data-value="hours"]').textContent = hours;
    document.querySelector('[data-value="mins"]').textContent = mins;
    document.querySelector('[data-value="secs"]').textContent = secs;
}

setInterval(() => {
    update()
})