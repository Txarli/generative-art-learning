import { UnDeuxTroisRotating } from './UnDeuxTroisRotating';
import { Story, Meta, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);

export default {
  title: 'UnDeuxTroisRotating',
  component: UnDeuxTroisRotating,
} as Meta;

export const Default: Story = UnDeuxTroisRotating;
