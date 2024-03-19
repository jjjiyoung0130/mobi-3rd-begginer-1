import styled, { css } from "styled-components";
import { COLOR } from "../styled-component/tokens/color";
import { SIZE } from "../styled-component/tokens/size";
import { BORDER } from "../styled-component/tokens/border";
import { BORDER_RADIUS } from "../styled-component/tokens/borderRadius";

import { FONT_SIZE } from "../styled-component/tokens/fontSize";

interface ButtonProps {
  primary?: boolean;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
  size?: "small" | "medium" | "large" | "square";
  onClick?: () => void;
}

export const TSButton = styled.button<ButtonProps>`
  margin: 10px;
  border: ${BORDER.gray.thick_black_border};
  border-radius: ${({ borderRadius }) =>
    borderRadius || BORDER_RADIUS.round_square};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color || COLOR.grayScale.gray_0};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLOR.main.weight};

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${FONT_SIZE.sm};
      width: ${SIZE.button.small.width};
      height: ${SIZE.button.small.height};
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: ${FONT_SIZE.md};
      width: ${SIZE.button.medium.width};
      height: ${SIZE.button.medium.height};
    `}

${({ size }) =>
    size === "large" &&
    css`
      font-size: ${FONT_SIZE.lg};
      width: ${SIZE.button.large.width};
      height: ${SIZE.button.large.height};
    `}

    ${({ size }) =>
    size === "square" &&
    css`
      font-size: ${FONT_SIZE.sm};
      width: ${SIZE.button.square.width};
      height: ${SIZE.button.square.height};
    `}


   &:hover {
    color: ${COLOR.main.weight};
    background-color: ${COLOR.main.light};
  }
`;
