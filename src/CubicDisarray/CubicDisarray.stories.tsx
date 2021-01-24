import { CubicDisarray } from './CubicDisarray';
import { Story, Meta, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);

export default {
  title: 'CubicDisarray',
  component: CubicDisarray,
} as Meta;

export const Default: Story = CubicDisarray;
