import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 text-white border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center text-white font-bold">EV</div>
          <span className="text-lg font-semibold tracking-wide">EVConnect</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="text-white/95 hover:text-white font-medium">Home</Link>
          <Link to="/dashboard" className="text-white/95 hover:text-white font-medium">Dashboard</Link>
          <Link to="/wallet" className="text-white/95 hover:text-white font-medium">Wallet</Link>
          <Link to="/admin" className="text-white/95 hover:text-white font-medium">Admin</Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 rounded-md bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-md p-3 shadow-sm flex flex-col gap-2">
            <Link to="/" onClick={() => setOpen(false)} className="text-white/95 px-2 py-1 rounded hover:bg-white/20">Home</Link>
            <Link to="/dashboard" onClick={() => setOpen(false)} className="text-white/95 px-2 py-1 rounded hover:bg-white/20">Dashboard</Link>
            <Link to="/wallet" onClick={() => setOpen(false)} className="text-white/95 px-2 py-1 rounded hover:bg-white/20">Wallet</Link>
            <Link to="/admin" onClick={() => setOpen(false)} className="text-white/95 px-2 py-1 rounded hover:bg-white/20">Admin</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
