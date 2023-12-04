import type { Meta, StoryObj } from '@storybook/angular';
import { SplitbuttonComponent } from '../lib/splitbutton/splitbutton.component';


const meta: Meta<SplitbuttonComponent> = {
  title: 'Components/ButtonWithIcons',
  decorators: [],
  component: SplitbuttonComponent,
  parameters: {
    docs: {
      inlineStories: true, // This can be set to true or false based on your preference
    },
  },
  tags: ['autodocs'],
  render: (args: SplitbuttonComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<SplitbuttonComponent>;

export const PrimaryButton: Story = {
  args: {
    primary: true,
    size:'lg',
    label: 'Button',
    prefixIcon: 'plus',
    postfixIcon: 'caret-down-fill',
    preFixIconDisabled:false,
    postFixIconDisabled:false
  },
};


export const SecondaryButton: Story = {
  args: {
    secondary: true,
    label: 'Button',
  },
};

export const DestructiveButton: Story = {
  args: {
    destructive: true,
    label: 'Button',
  },
};


export const DisabledButton: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
};