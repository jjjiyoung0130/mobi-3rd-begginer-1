import { Checkbox, FormControlLabel } from "@mui/material";

export const MUICheckbox = () => {
  return (
    <>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox
        defaultChecked
        sx={{
          color: "green",
          "&.Mui-checked": {
            color: "green",
          },
        }}
      />
      <Checkbox disabled />
      <Checkbox disabled checked />

      <FormControlLabel
        required
        control={<Checkbox />}
        label="졸려"
        color="red"
      />
    </>
  );
};
