import styled, { css } from "styled-components";
import { COLOR } from "../styled-component/tokens/color";
import { SIZE } from "../styled-component/tokens/size";
import { BORDER } from "../styled-component/tokens/boeder";
import { BORDER_RADIUS } from "../styled-component/tokens/borderRadius";

import { FONT_SIZE } from "../styled-component/tokens/fontSize";

interface ButtonProps {
  primary?: boolean;
  label?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const Button = styled.button<ButtonProps>`
  margin: 10px;
  border: ${BORDER.gray.thick_black_border};
  border-radius: ${BORDER_RADIUS.round_square};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.grayScale.gray_0};
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


   &:hover {
    background-color: ${COLOR.sub.light};
  }
`;
