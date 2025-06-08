import logo from './logo.svg';
import './App.css';

function App() {
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

export default App;
