import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />}> */}
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route component={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
