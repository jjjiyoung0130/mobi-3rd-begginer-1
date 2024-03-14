import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../components/Box";
import { COLOR } from "../styled-component/tokens/color";

const meta = {
  title: "Test/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: COLOR.palette.green.light,
    label: "Box",
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: COLOR.palette.green.weight,
    label: "Box",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Box",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Box",
  },
};

export const Warning: Story = {
  args: {
    label: "Box",
    backgroundColor: COLOR.palette.red.weight,
  },
};
