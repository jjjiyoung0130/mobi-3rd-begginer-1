import type { Meta, StoryObj } from "@storybook/react";

import { TSButton } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// 버튼 컴포넌트에 대한 메타 정보 정의 (title, component, layout, tags, argTypes)
const meta = {
  title: "Example/Button",
  component: TSButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof TSButton>;

// meata 정보 내보내기
export default meta;

// 스토리 객체 정의 (버튼 컴포넌트의 스토리에 대한 정보를 담고 있다)
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// 버튼 컴포넌트의 다양한 속성 설정 (스토리 정의)
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
