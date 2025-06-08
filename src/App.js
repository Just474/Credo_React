import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Pages/Main/Main";
import Footer from "./components/Footer/Footer";
import Consultation from "./components/Pages/Consultation/Consultation";
import Page404 from "./components/Pages/Page404/Page404";
import Catalog from "./components/Pages/Catalog/Catalog";
import News from "./components/Pages/News/News";
import SingleNews from "./components/Pages/SingleNews/SingleNews";
import Cart from "./components/Pages/Cart/Cart";


export default function App() {
  return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="*" element={<Page404/>}></Route>
                    <Route path="/" element={<Main/>} />
                    <Route path='/consultation' element={<Consultation/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/news/1' element={<SingleNews/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
  );
}

