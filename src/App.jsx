import { RecoilRoot } from "recoil";
import "./App.css";
import { Main } from "./pages/Main";
import { Test } from "./pages/Test";
import Navbar from "./components/Navbar";
import { TestBar } from "./components/Testbar";

function App() {
  return (
    <>
      <RecoilRoot>
        {/* <section> */}
        <Navbar />
        {/* <TestBar /> */}
        {/* </section> */}
        <Test />
      </RecoilRoot>
    </>
  );
}

export default App;
