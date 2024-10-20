import type { Meta, StoryObj } from '@storybook/react';

import Tab from '.';

const meta: Meta<typeof Tab> = {
  component: Tab,
  title: 'Tab',
};

export default meta;
type Story = StoryObj<typeof Tab>;

const parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};

export const Default: Story = {
  parameters,
  args: {
    label: '전체',
    isActive: true,
  },
};
