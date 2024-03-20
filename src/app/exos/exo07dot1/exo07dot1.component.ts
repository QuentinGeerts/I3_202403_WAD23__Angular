import { Component } from '@angular/core';

@Component({
  selector: 'app-exo07dot1',
  templateUrl: './exo07dot1.component.html',
  styleUrl: './exo07dot1.component.scss'
})
export class Exo07dot1Component {
  count: number = 0;
  timer!: ReturnType<typeof setInterval> | null;

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => { this.count++; }, 1_000)
    console.log(`Timer ${this.timer} has started.`);
  }

  stop() {
    if (!this.timer) return;
    clearInterval(this.timer);
    console.log(`Timer ${this.timer} has stopped.`);
    this.timer = null;
  }

  reset() {
    if (!this.timer) return;
    console.log(`Timer ${this.timer} reset.`);
    this.count = 0;
    this.stop();
  }
}
