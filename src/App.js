import { React } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Public from "./Pages/Common-component/Public";

function App() {
  return (
    <div >
      <Header />
      <Public className="h-full" />
      <Footer />
    </div>
  );
}

export default App;
