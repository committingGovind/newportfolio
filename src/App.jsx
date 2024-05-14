import { RecoilRoot } from "recoil";
import "./App.css";
import { Main } from "./pages/Main";

function App() {
  return (
    <>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  );
}

export default App;
