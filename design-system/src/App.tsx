import "./App.css";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { COLOR } from "./styled-component/tokens/color";

function App() {
  return (
    <>
      <Button primary={true} size="large" backgroundColor={COLOR.main.light}>
        버튼
      </Button>
      <Button label="테스트" size="small">
        테스트
      </Button>
      <Box size="small" backgroundColor={COLOR.palette.red.light} />
      <Input
        width="30rem"
        height="3rem"
        titleText="되나?"
        buttonText="Submit"
        handleButton={() => {}}
      />
    </>
  );
}

export default App;
