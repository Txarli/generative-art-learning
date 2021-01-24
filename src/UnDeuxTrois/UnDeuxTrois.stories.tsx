import { UnDeuxTrois } from './UnDeuxTrois';
import { Story, Meta, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);

export default {
  title: 'UnDeuxTrois',
  component: UnDeuxTrois,
} as Meta;

export const Default: Story = UnDeuxTrois;
