import { BrowserRouter } from "react-router-dom";
import RouterApp from "./routes"
import { ToastContainer } from "react-toastify";
import Header from "./components/elements/Header";

function App() {
  const url = window.location.href

  return (
    <BrowserRouter>
      <ToastContainer autoClose="1000" />
      {url!=="http://localhost:3000/" && url!=="http://localhost:3000/cadastro" && (
        <Header />
      )
      }
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;