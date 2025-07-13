function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const incrementCounter = createCounter();
const clickBtn = document.getElementById('clickBtn');
const countDisplay = document.getElementById('countDisplay');

clickBtn.addEventListener('click', () => {
  const currentCount = incrementCounter();
  countDisplay.textContent = `You have clicked ${currentCount} time${currentCount > 1 ? 's' : ''}.`;
});