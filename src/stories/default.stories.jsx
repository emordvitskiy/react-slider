import { Slider } from '../Slider';

export default {
  title: 'React-slider/Default',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Slider {...args} />;

export const DefaultTestComponent = Template.bind({});
