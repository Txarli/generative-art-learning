import { CirclePackingBorning } from './CirclePackingBorning';
import { Story, Meta, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);

export default {
  title: 'CirclePackingBorning',
  component: CirclePackingBorning,
} as Meta;

export const Default: Story = CirclePackingBorning;
