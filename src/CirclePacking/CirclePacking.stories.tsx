import { CirclePacking } from './CirclePacking';
import { Story, Meta, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);

export default {
  title: 'CirclePacking',
  component: CirclePacking,
} as Meta;

export const Default: Story = CirclePacking;
