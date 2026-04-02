import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import History from './pages/History'
import Journey from './pages/Journey'
import FamilyTree from './pages/FamilyTree'
import Honours from './pages/Honours'
import Membership from './pages/Membership'
import Join from './pages/Join'
import Archive from './pages/Archive'
import Store from './pages/Store'
import Petition from './pages/Petition'
import News from './pages/News'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Member from './pages/Member'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/family-tree" element={<FamilyTree />} />
        <Route path="/honours" element={<Honours />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/join" element={<Join />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/store" element={<Store />} />
        <Route path="/petition" element={<Petition />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/member"
          element={
            <ProtectedRoute>
              <Member />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
