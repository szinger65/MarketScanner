import { useState, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import api from "../api" 


function Home() {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()

  return (
    <div>
      <nav className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
        {/* Title */}
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            MATILDA
          </span>
        </div>

        {/* Create Account Link */}
        <div className="flex items-center">
          <Link 
            to="/login" 
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200 shadow-sm"
          >
            <User className="w-4 h-4 text-slate-900" />
            <span>Login</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

  export default Home
