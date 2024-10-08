import "../styles/general.css";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import NewArticle from "./article/NewArticle";
import ArticleDetails from "./article/ArticleDetails";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/article/:id" element={<ArticleDetails />}></Route>

          <Route path="/new" element={<NewArticle />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
