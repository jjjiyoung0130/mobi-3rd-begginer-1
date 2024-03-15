import { Autocomplete, TextField } from "@mui/material";

export const MUIAutoComplete = () => {
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
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="UI Library" />}
    />
  );
};
