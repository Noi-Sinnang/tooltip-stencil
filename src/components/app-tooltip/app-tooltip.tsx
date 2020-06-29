import { Component, ComponentInterface, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'app-tooltip',
  styleUrl: 'app-tooltip.css',
  shadow: true,
})
export class AppTooltip implements ComponentInterface {
  @State() tooltipVisible = false;
  @Prop() text: string;

  onToggleTooltip() {
    this.tooltipVisible = !this.tooltipVisible;
  }

  render() {
    let tooltip = null;
    if (this.tooltipVisible) {
    tooltip = <div id="tooltip-text">{this.text}</div>
    }

    return [
      <slot></slot>,
      <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>?</span>,
      tooltip
    ]
  }
}
