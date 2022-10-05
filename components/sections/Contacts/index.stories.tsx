import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Contacts from './index';

export default {
  title: 'sections/Contacts',
  component: Contacts,
  argTypes: {},
} as ComponentMeta<typeof Contacts>;

const Template: ComponentStory<typeof Contacts> = (args) => (
  <Contacts {...args} />
);

export const Base = Template.bind({});
