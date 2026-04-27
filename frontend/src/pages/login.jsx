import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import Form from "../components/form";

function Login() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Handle User Data for the Profile Circle
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setUserData(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
        {/* Title */}
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            MATILDA
          </span>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center rounded-full p-1 hover:bg-slate-100 transition-colors"
          >
            <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
              {userData?.profile_picture ? (
                <img src={userData.profile_picture} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <span className="text-sm font-bold text-white">
                  {userData?.name?.charAt(0) || 'U'}
                </span>
              )}
            </div>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5">
              <div className="px-4 py-2 border-b border-slate-50">
                <p className="text-sm font-semibold text-slate-900">{userData?.name || 'Guest'}</p>
                <p className="text-xs text-slate-500 truncate">{userData?.email}</p>
              </div>
              <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                <User className="w-4 h-4" /> Profile
              </Link>
              <button onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                <LogOut className="w-4 h-4" /> Sign out
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* --- LOGIN CONTENT --- */}
      <main className="flex flex-col items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl border border-slate-100">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Welcome to Matilda</h1>
            <p className="text-slate-500 mt-3 font-medium">A Premium Marketplace Scanner</p>
          </div>
          
          {/* Your existing Form component */}
          <Form route="/api/token/" method="login" />
          
          <p className="mt-8 text-center text-sm text-slate-400">
            Secure marketplace access provided by Matilda Engine.
          </p>
        </div>
      </main>

    </div>
  );
}

export default Login;
