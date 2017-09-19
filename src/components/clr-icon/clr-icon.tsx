import { Component, Prop } from '@stencil/core';
import { ClarityIconsApi } from './api';
import { CoreShapes } from './shapes/core-shapes';

const clarityIcons: ClarityIconsApi = ClarityIconsApi.instance;
clarityIcons.add(CoreShapes);

if (!window.hasOwnProperty("ClarityIcons")) {
  // Setting a global object called "ClarityIcons" to expose the ClarityIconsApi.
  (window as any).ClarityIcons = clarityIcons;
}

@Component({
  tag: 'clr-icon',
  styleUrl: 'clr-icon.scss'
})
export class ClarityIcon {

  // Indicate that name should be a public property on the component
  @Prop() shape: string;
  @Prop() size: number;

  generateIcon(shape: string) {
    shape = shape.split(/\s/)[0];

    // shape exists in set
    if (ClarityIconsApi.instance.has(shape)) {
        return ClarityIconsApi.instance.get(shape);
    } else {
        console.error(`'${shape}' is not found in the Clarity Icons set.`);
        return ClarityIconsApi.instance.get("error");
    }
  }

  render() {
    return (
      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{__html:this.generateIcon(this.shape)}}></svg>
    );
  }
}