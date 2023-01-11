export default class Clock {
  constructor(domElement) {
    this.date = document.getElementById(domElement);
    this.updateTime();
  }

  updateTime() {
    const currentTime = new Date().toLocaleString();
    this.date.innerHTML = currentTime;
    setInterval(this.updateTime, 1000);
  }
}