import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'clr-progress-bar',
  styleUrl: 'clr-progress-bar.scss'
})
export class ClrProgressBar {

  @Prop() labeled = false;
  @Prop() fadeOut = false;
  @Prop() loop = false;
  @Prop() color: ''|'success'|'danger' = '';
  @Prop() max: number = 100;
  @Prop() value: number = 0;

  render() {
    return (
      <div class="progress">
        <progress max={this.max} value={this.value} data-displayval={this.value+'%'}></progress>
    </div>
    );
  }
}