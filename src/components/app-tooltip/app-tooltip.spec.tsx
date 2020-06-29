import { newSpecPage } from '@stencil/core/testing';
import { AppTooltip } from './app-tooltip';

describe('app-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTooltip],
      html: `<app-tooltip></app-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <app-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-tooltip>
    `);
  });
});
