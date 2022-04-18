import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LayoutComponent } from './layout.component';
export default {
  title: 'LayoutComponent',
  staticDirs: ['../../../../assets/src/assets'],
  component: LayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule],
    }),
  ],
} as Meta<LayoutComponent>;

const Template: Story<LayoutComponent> = (args: LayoutComponent) => ({
  props: {...args},
});

export const Defualt = Template.bind({});

Defualt.args = {

};
