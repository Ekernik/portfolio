import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import AboutMe from './index';

export default {
  title: 'sections/AboutMe',
  component: AboutMe,
  argTypes: {},
} as ComponentMeta<typeof AboutMe>;

const Template: ComponentStory<typeof AboutMe> = (args) => (
  <AboutMe {...args} />
);

export const Base = Template.bind({});
