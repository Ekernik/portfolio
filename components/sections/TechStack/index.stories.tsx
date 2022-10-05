import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TechStack from './index';

export default {
  title: 'sections/TechStack',
  component: TechStack,
  argTypes: {},
} as ComponentMeta<typeof TechStack>;

const Template: ComponentStory<typeof TechStack> = (args) => (
  <TechStack {...args} />
);

export const Base = Template.bind({});
