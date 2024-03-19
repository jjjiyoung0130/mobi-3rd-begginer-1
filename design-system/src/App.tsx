import { useState } from "react";
import "./App.css";
import { Box } from "./components/Box";
import { TSButton } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { COLOR } from "./styled-component/tokens/color";
import Checkbox from "./components/CheckBox";
import { Pagenation } from "./components/Pagenation";
import { MUIButton } from "./components/libs/MUI/Button";
import { MUIAutoComplete } from "./components/libs/MUI/Autocomplete";
import { MUICheckbox } from "./components/libs/MUI/Checkbox";
import { CHAKRAButton } from "./components/libs/CHAKRA/Button";
import { CHAKRAInput } from "./components/libs/CHAKRA/Input";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const user = { name: "Brilly" };
  const handleLogin = () => {
    console.log("Login clicked");
  };
  const handleLogout = () => {
    console.log("Logout clicked");
  };
  const handleCreateAccount = () => {
    console.log("Create Account clicked");
  };

  const handlePageChange = (page: number) => {
    console.log("Page changed :", page);
  };
  return (
    <>
      <Checkbox
        label="체크박스"
        isChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <TSButton
        primary={true}
        size="large"
        backgroundColor={COLOR.sub.base}
        color={COLOR.palette.purple.weight}
      >
        버튼
      </TSButton>
      <TSButton size="small">테스트</TSButton>

      <TSButton
        size="square"
        borderRadius="5px"
        backgroundColor={COLOR.palette.purple.light}
      >
        1
      </TSButton>

      <Pagenation
        currentPage={1}
        totalPages={5}
        onPageChange={handlePageChange}
      />

      <Box size="small" backgroundColor={COLOR.palette.red.light} />
      <Input
        width="30rem"
        titleText="되나?"
        buttonText="Submit"
        placeHolder="테스트입니다"
        handleButton={() => {}}
      />
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCreateAccount={handleCreateAccount}
      />
      <MUIButton />
      <MUIAutoComplete />
      <MUICheckbox />

      <CHAKRAButton />
      <CHAKRAInput />
    </>
  );
}

export default App;
