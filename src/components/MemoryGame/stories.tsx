import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryGame } from '.';

export default {
  title: 'MemoryGame',
  component: MemoryGame,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => <MemoryGame {...args} />;
