import { Story, Meta, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { EmotionMethod } from './EmotionMethod';

addDecorator(centered);

export default {
  title: 'Emotion and Method',
  component: EmotionMethod,
} as Meta;

export const Default: Story = EmotionMethod;
