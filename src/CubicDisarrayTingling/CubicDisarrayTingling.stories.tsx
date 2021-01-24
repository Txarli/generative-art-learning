import { CubicDisarrayTingling } from './CubicDisarrayTingling';
import { Story, Meta, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);

export default {
  title: 'CubicDisarrayTingling',
  component: CubicDisarrayTingling,
} as Meta;

export const Default: Story = CubicDisarrayTingling;
