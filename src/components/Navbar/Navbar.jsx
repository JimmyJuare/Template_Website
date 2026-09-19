import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteData } from '../../data/siteData'
import Button from '../Button/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar"><div className="container navbar-inner"><Link className="brand" to="/" onClick={() => setOpen(false)}><span className="brand-mark">N</span><span>{siteData.company.name}</span></Link><nav className={`nav-links ${open ? 'nav-links-open' : ''}`} aria-label="Primary navigation">{siteData.navigation.map((item) => <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.label}</NavLink>)}<Button to="/contact">Start a conversation</Button></nav><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}