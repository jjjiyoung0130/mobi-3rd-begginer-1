import { Autocomplete, TextField } from "@mui/material";

export const MUIAutoComplete = () => {
  // 임의로 생성한 options
  const options = [
    "MUI",
    "TailwindCSS UI",
    "Chakra UI",
    "Shadcn UI",
    "Heaedless UI",
  ];
  return (
    <Autocomplete
      disablePortal // Autocomplete 메뉴가 포털에 렌더링되지 않고 Autocomplete 컴포넌트의 DOM 구조 내에 직접 렌더링
      id="combo-box"
      options={options} // options 배열을 전달하여 자동 완성할 옵션 설정
      sx={{ width: 300 }} // 컴포넌트 스타일 설정
      renderInput={(params) => <TextField {...params} label="UI Library" />} // 커스텀 입력 필드
    />
  );
};
