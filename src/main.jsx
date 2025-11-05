import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import MainLayout from "./layouts/main.layout";
import Homepage from './pages/home.page'
import SignInpage from './pages/sign-in.page';
import SignUpPage from './pages/sign-up.page';

//import NoteUpdatePage from './pages/NoteUpdatePage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<SignInpage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      
           <Route element={<MainLayout />}>
      <Route path="/" element={<Homepage />} />
      

 </Route>
    </Routes>
  </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
)
