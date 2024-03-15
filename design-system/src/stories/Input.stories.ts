import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta = {
  title: "Test/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "100rem",
    titleText: "primary",
    buttonText: "확인",
  },
};

export const Secondary: Story = {
  args: {
    width: "80rem",
    titleText: "secondary",
  },
};

export const Large: Story = {
  args: {
    width: "120rem",
    titleText: "large",
  },
};

export const Small: Story = {
  args: {
    width: "60rem",
    titleText: "small",
  },
};

export const Warning: Story = {
  args: {
    width: "100rem",
    titleText: "error",
  },
};
