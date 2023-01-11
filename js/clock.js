export default class Clock {
  constructor(domElement) {
    this.id = domElement;
    this.date = document.getElementById(domElement);
    this.updateTime();
  }

  updateTime() {
    const currentTime = new Date().toLocaleString();
    this.date.innerHTML = currentTime;
    setInterval(this.updateTime, 1000, null, this.id);
  }
}