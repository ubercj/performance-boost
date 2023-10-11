import { LightningElement } from 'lwc';

export default class Performanceboost extends LightningElement {
  progress = 0;

  boost() {
      this.progress = this.progress + 1;
  }

  get computedLabel() {
      return 'Label';
  }
}