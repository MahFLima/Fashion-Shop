import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListProductPage } from "./pages/ListProductPage";
import { ProductPage } from "./pages/ProductPage";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/list-products" element={<ListProductPage/>} />
      <Route path="/product/:name" element={<ProductPage/>} />
      <Route path="*" element={<h1>Pagina não encontrada</h1>} />
    </Routes>
  )
}