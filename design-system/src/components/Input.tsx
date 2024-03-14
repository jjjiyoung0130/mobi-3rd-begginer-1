import styled from "styled-components";
import { COLOR } from "../styled-component/tokens/color";
import { FONT_SIZE } from "../styled-component/tokens/fontSize";
import { BORDER } from "../styled-component/tokens/boeder";
import { BORDER_RADIUS } from "../styled-component/tokens/borderRadius";
interface InputProps {
  width?: string;
  height?: string;
  titleText?: string;
  buttonText?: string;
  handleButton?: () => void;
}

export const Input = ({
  width = "30rem",
  titleText = " ",
  buttonText = "",
  handleButton = () => {},
  ...props
}: InputProps) => {
  return (
    <InputWrapper $width={width}>
      {titleText && <Title>{titleText}</Title>}
      <BorderBox>
        {buttonText.trim() && (
          <TextButton
            onClick={(e) => {
              handleButton();
              e.preventDefault();
            }}
          >
            {buttonText.trim()}
          </TextButton>
        )}
      </BorderBox>
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ $width: string }>`
  height: auto;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 0.5rem;
  width: ${({ $width }) => $width};
`;

const Title = styled.h4``;

const BorderBox = styled.div`
  grid-row: 2;
  height: fit-content;
  min-height: 4rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: ${BORDER.gray.thick_black_border};
  border-radius: ${BORDER_RADIUS.round_square};
  padding: 0.2rem 1rem;
`;

const TextButton = styled.button`
  width: 6rem;
  padding: 0.8rem;
  color: ${COLOR.grayScale.gray_0};
  background-color: ${COLOR.grayScale.gray_600};
  font-size: ${FONT_SIZE.sm};
  border-radius: ${BORDER_RADIUS.round_square};
  word-break: keep-all;
  &:hover {
    color: ${COLOR.main.light};
    background-color: ${COLOR.grayScale.gray_600};
    cursor: pointer;
  }
`;
