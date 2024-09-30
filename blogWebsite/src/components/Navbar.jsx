import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'
import Swal from 'sweetalert2'
import '@sweetalert2/themes/dark/dark.scss';

function Navbar() {

    const icon = () => {
        Swal.fire({
            icon: "success",
            title: 'Enter your name',
            input: 'text',
            inputPlaceholder: 'Enter your name here',
            confirmButtonText: 'Submit',
            showCancelButton: true,
            cancelButtonText: 'Cancel'

        })
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo"> <span style={{ color: '#FABC3F' }}>THE </span>
                    <span>-</span> TRAVEL</div>
                <ul className="nav-links">
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <div className="search">
                    <button onClick={icon} className='searchButton'>&#128100;</button>
                    <input type="text"  placeholder="Search..." />
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar