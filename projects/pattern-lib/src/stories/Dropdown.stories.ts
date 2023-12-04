import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {DropDownComponent} from '../lib/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Components/Dropdown',
  decorators: [
		moduleMetadata({
			declarations: [],
			imports: [
				FormsModule,
				ReactiveFormsModule,
			]
		})
	],
  component: DropDownComponent,
  parameters: {
    docs: {
      inlineStories: true, // This can be set to true or false based on your preference
    },
  },
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<DropDownComponent> = (args: DropDownComponent) => ({
  component: DropDownComponent,
  props: args,
  onSelectionChange: () => {
    console.log('Selection changed');
  },
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'Country',
  options:['UK', 'USA', 'INDIA'],
  size:'medium',
  selectedOption:'USA',
};
