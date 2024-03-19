import { Button, Stack } from "@chakra-ui/react";
import { COLOR } from "../../../styled-component/tokens/color";

export const CHAKRAButton = () => {
  return (
    <Stack spacing={4} direction="row" align="center" margin={10}>
      <Button isLoading loadingText="loading..." color="teal" variant="outline">
        Button
      </Button>
      <Button backgroundColor="teal" color="white">
        Button
      </Button>
      <Button color={COLOR.palette.red.light}>Button</Button>
      <Button backgroundColor={COLOR.palette.red.light} color="white">
        Button
      </Button>
    </Stack>
  );
};
