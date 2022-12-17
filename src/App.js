import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import ListPromotionPage from "./pages/PromotionManager/ListPromotionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <div className="App">
      {/* <RootLayout /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/manager" element={<RootLayout />}>
            <Route path="promotion" element={<ListPromotionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <LoginPage />
        <Routes>
        
            
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
