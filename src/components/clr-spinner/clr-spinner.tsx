import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'clr-spinner',
  styleUrl: 'clr-spinner.scss'
})
export class ClrSpinner {

  @Prop() inline: boolean;
  @Prop() inverse: boolean;
  @Prop() label = '';
  @Prop() size: 'sm'|'md'|'lg' = 'lg';

  getClass() {
    const classes = ['spinner'];
    if (this.inline !== undefined) {
      classes.push('spinner-inline')
    }
    if (this.inverse !== undefined) {
      classes.push('spinner-inverse');
    }
    return classes.join(' ');
  }

  render() {
    return (
      <span class={this.getClass()}>
        {this.label}
      </span>
    );
  }
}