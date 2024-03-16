import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PagesPage from './pages/PagesPage'
import ShopPage from './pages/ShopPage'
import ProjectsPage from './pages/ProjectsPage'
import NewsPage from './pages/NewsPage'


import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/pages' element={<PagesPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/news' element={<NewsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
