import styled, { css } from "styled-components";
import { BORDER_RADIUS } from "../styled-component/tokens/borderRadius";
import { COLOR } from "../styled-component/tokens/color";
import { BORDER } from "../styled-component/tokens/boeder";
import { FONT_SIZE } from "../styled-component/tokens/fontSize";
import { SIZE } from "../styled-component/tokens/size";

// 인터페이스를 정의해서 박스 컴포넌트에서 사용할 수 있는 props 정의
interface BoxProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
}

export const Box = styled.div<BoxProps>`
  margin: 10px;
  border: ${BORDER.gray.thick_black_border};
  border-radius: ${BORDER_RADIUS.round_square};
  display: flex;
  align-items: center;
  color: ${COLOR.palette.orange.light};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLOR.palette.green.weight};

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${FONT_SIZE.sm};
      width: ${SIZE.box.small.width};
      height: ${SIZE.box.small.height};
      padding: ${SIZE.box.small.padding};
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: ${FONT_SIZE.md};
      width: ${SIZE.box.medium.width};
      height: ${SIZE.box.medium.height};
      padding: ${SIZE.box.medium.padding};
    `}

${({ size }) =>
    size === "large" &&
    css`
      font-size: ${FONT_SIZE.lg};
      width: ${SIZE.box.large.width};
      height: ${SIZE.box.large.height};
      padding: ${SIZE.box.large.padding};
    `}


   &:hover {
    background-color: ${COLOR.palette.purple.light};
    box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 5px 5px;
  }
`;
