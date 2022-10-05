import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyWork from './index';

export default {
  title: 'sections/MyWork',
  component: MyWork,
  argTypes: {},
} as ComponentMeta<typeof MyWork>;

const Template: ComponentStory<typeof MyWork> = (args) => <MyWork {...args} />;

export const Base = Template.bind({});
