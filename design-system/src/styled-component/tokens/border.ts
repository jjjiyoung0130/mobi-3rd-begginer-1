import { COLOR } from "./color";

export const BORDER = {
  black: {
    thin_black_border: `0.5px solid ${COLOR.grayScale.gray_1000}`,
    general_black_border: `1px solid ${COLOR.grayScale.gray_1000}`,
    thick_black_border: `2px solid ${COLOR.grayScale.gray_1000}`,
  },
  gray: {
    thin_black_border: `0.5px solid ${COLOR.grayScale.gray_600}`,
    general_black_border: `1px solid ${COLOR.grayScale.gray_600}`,
    thick_black_border: `2px solid ${COLOR.grayScale.gray_600}`,
  },
} as const;
