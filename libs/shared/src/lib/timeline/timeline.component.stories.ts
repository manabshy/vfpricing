import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TimelineComponent } from './timeline.component';

export default {
  title: 'TimelineComponent',
  component: TimelineComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TimelineComponent>;

const Template: Story<TimelineComponent> = (args: TimelineComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}