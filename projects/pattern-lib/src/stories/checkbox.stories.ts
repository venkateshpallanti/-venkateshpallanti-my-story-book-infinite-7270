/* tslint:disable variable-name */

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { moduleMetadata, Meta, StoryObj } from "@storybook/angular";

import { ReactiveFormsStory } from "./reactive-form.component";
import { CheckboxComponent } from "../lib/checkbox/checkbox.component";


export default {
	title: "Components/Checkbox",
	decorators: [
		moduleMetadata({
			declarations: [ReactiveFormsStory],
			imports: [
				FormsModule,
				ReactiveFormsModule,

			]
		})
	],
	component: CheckboxComponent,
	parameters: {
		docs: {
			inlineStories: true, // This can be set to true or false based on your preference
		},
	},
	tags: ['autodocs'],
} as Meta;
type Story = StoryObj<CheckboxComponent>;



// const Template: Story<CheckboxComponent> = (args) => ({
// 	props: args,
// 	template: `
// 	<div class="cds--label">
// 	<tc-checkbox
// 		input type="checkbox"
// 		[disabled]="disabled"
// 		[indeterminate]="indeterminate"
// 		[checked]="checked"
// 		(checkedChange)="onChange($event)"
// 		[hideLabel]="hideLabel"
// 		(indeterminateChange)="onIndeterminateChange($event)">
// 		&nbsp;&nbsp;&nbsp;{{label}}
// 	</tc-checkbox>
// 	<span class="checkmark"></span>
// 	</div>
// 	`
// });
// export const Basic = Template.bind({});
// Basic.args = {
// 	label: "POC",
// 	// hideLabel: false,
// 	indeterminate: true,
// 	checked: false,
// 	disabled: false
// };

// Basic.argTypes = {
// 	onChange: { action: "Changed!" },
// 	onIndeterminateChange: { action: "Indeterminate Change!" }
// };

export const Indeterminate: Story = {
	args: {
		label: "CHECK",
		hideLabel: true,
		indeterminate: true,
		checked: false,
		disabled: false
	},
};
// export const UnsetIndeterminate: Story = {
// 	args: {
// 		label: "POC2",
// 		 hideLabel: true,
// 		indeterminate: false,
// 		checked: false,
// 		disabled: false
// 	},
// };
export const Checked: Story = {
	args: {
		label: "CHECK",
		 hideLabel: true,
		indeterminate: false,
		checked: true,
		disabled: false
	},
};
export const UnChecked: Story = {
	args: {
		label: "CHECK",
		 hideLabel: true,
		indeterminate: false,
		checked: false,
		disabled: false
	},
};
export const DisabledWithUnchecked: Story = {
	args: {
		label: "CHECK",
		 hideLabel: true,
		indeterminate: false,
		checked: false,
		disabled: true
	},
};
export const DisabledWithChecked: Story = {
	args: {
		label: "CHECK",
		 hideLabel: true,
		indeterminate: false,
		checked: true,
		disabled: true
	},
};
export const DisabledWithIndeterminateChecked: Story = {
	args: {
		label: "CHECK",
		hideLabel: true,
		indeterminate: true,
		checked: false,
		disabled: true
	},
};