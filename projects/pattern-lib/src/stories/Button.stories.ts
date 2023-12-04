import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../lib/button/button.component';
//import { withSource } from '@storybook/addon-storysource';


const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  decorators: [],
  component: ButtonComponent,
  parameters: {
    docs: {
      inlineStories: true, // This can be set to true or false based on your preference
    },
  },
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
     // backgroundColor: null,
      ...args,

    },
  }),
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const ButtonDefault: Story = {
  args: {
    primary: true,
    disable: false,
    active:false,
    hover:false,
    label: 'SEARCH',
    size:'small'
  },
};

export const ButtonDisable: Story = {
  args: {
    disable: true,
  },
};

export const ButtonHover: Story = {
  args: {
    hover: true,
  },
};

export const ButtonActive: Story = {
  args: {
    active: true,
  },
};


// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'SEARCH',
//   },
// };

// export const Medium: Story = {
//   args: {
//     size: 'medium',
//     label: 'SEARCH',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'SEARCH',
//   },
// };




// export const Secondary: Story = {
//   args: {
//     label: 'SEARCH',
//   },
// };



