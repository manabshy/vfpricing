import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AlertComponent } from './alert.component';

export default {
  title: 'AlertComponent',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    })
  ],
} as Meta<AlertComponent>;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
  template: `
  <vfpricing-alert [alertType]="'warning'">
    Some Warning Message here
  </vfpricing-alert>`,
});


export const Primary = Template.bind({});
Primary.args = {
}
