
import {Link, useHistory} from 'react-router-dom'
import './NavBar.css'
import SearchBar from './SearchBar'
import Logo from '../favicon.ico'


export default function NavBar(){

    return (
        <div className='navBar'>
            <ul id='navbarUl'>
                {/* <li>
                    <button className='navBarBttn'onClick={history.goBack}>Back</button>
                </li> */}
                <li>
                <Link to="/home">
                    <img id="logoHenry" src={Logo} width="30" height="30" alt="" />
                </Link>
                </li>
                <li>
                <Link to="/home">
                    <span className='homeText'>Henry - Food app</span>
                </Link>    
                </li>

            </ul>
                    <div className='searchBar'>
                        <SearchBar />
                    </div>
        </div>
    )
}