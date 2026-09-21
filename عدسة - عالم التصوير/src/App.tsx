import './App.css' // connected Tailwind
import Home from './content/home'
import Blog from './content/blog'
import Aboutus from './content/aboutus'
import Navbar from './NavBar'
import Footer from './footer';
import Terms from './content/terms';
import Privacy from './content/privacy';
import { BrowserRouter, Routes, Route } from 'react-router';
import Article from "./content/articles";


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#090909] text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="*" element={<div className="flex justify-center items-center py-20 pt-50"><p className='font-bold rounded-full bg-red-500 px-10 py-5 text-center'>404 Not Found</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;