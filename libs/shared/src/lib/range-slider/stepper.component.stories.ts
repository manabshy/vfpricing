import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RangeSliderComponent } from './range-slider.component';
export default {
  title: 'RangeSliderComponent',
  component: RangeSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta<RangeSliderComponent>;

const Template: Story<RangeSliderComponent> = (args: RangeSliderComponent) => ({
  props: {}
});

export const Defualt = Template.bind({});

Defualt.args = {

};
