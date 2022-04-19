import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperComponent } from './stepper.component';
import { action } from '@storybook/addon-actions';
export default {
  title: 'StepperComponent',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta<StepperComponent>;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: {...args,
    clickEmit: action('onStepperClick'),
  },
});

export const Defualt = Template.bind({});

Defualt.args = {
  stepperConfig: [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
    { label: 'Step 4' },
  ],
};
