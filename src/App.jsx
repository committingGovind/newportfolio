import { RecoilRoot } from "recoil";
import "./App.css";
import Navbar from "./components/Navbar";
import { Test } from "./pages/Test";

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar />
        <Test />
      </RecoilRoot>
    </>
  );
}

export default App;
