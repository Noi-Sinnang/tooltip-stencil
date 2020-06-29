import { newE2EPage } from '@stencil/core/testing';

describe('app-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-tooltip></app-tooltip>');

    const element = await page.find('app-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
