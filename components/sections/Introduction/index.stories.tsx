import { ComponentMeta, ComponentStory } from '@storybook/react';
import Introduction from './index';

export default {
  title: 'sections/Introduction',
  component: Introduction,
  argTypes: {},
} as ComponentMeta<typeof Introduction>;

const Template: ComponentStory<typeof Introduction> = (args) => (
  <Introduction {...args} />
);

export const Base = Template.bind({});
