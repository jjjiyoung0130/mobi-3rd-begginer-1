import { Button, Stack } from "@mui/material";
import { COLOR } from "../../styled-component/tokens/color";

export const MUIButton = () => {
  return (
    <Stack direction="row" spacing={2} margin={2}>
      <Button
        variant="contained"
        sx={{ backgroundColor: COLOR.palette.orange.light }}
        onClick={() => {
          alert("MUI 라이브러리 테스트 중");
        }}
      >
        MUI버튼
      </Button>

      <Button variant="outlined" color="error">
        ERROR
      </Button>

      <Button variant="outlined" disabled>
        Dsabled
      </Button>
    </Stack>
  );
};
