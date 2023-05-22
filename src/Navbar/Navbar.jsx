import {useState} from 'react';
import './Navbar.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import Logonavbar from "../assets/images/logo2.png";



const Navbar = ({searchMovies}) => {
  const [searchMovie, setSearchMovie] = useState("");

  const searchInput=(event)=>{
    setSearchMovie(event.target.value) ;
  }

const ClickIcon=() => {
searchMovies(searchMovie);
}


  return (
    <nav className='navbar__container'>
        <div className="navbar__wrapper__body">
            <div className="navbar__header__left">
                <img src={Logonavbar} alt="" className="navbar__logo__left" />
                <h2 className="navbar__heading__left">Cinema Seek</h2>
            </div>
            <div className="navbar__list__right">
                  <input type="text" className="navbar__search__group" 
                  value={searchMovie} 
                  onChange={searchInput}
                   placeholder='enter movie name'/>
               <AiOutlineSearch className='search-icon' size={29} onClick={()=>ClickIcon()} role='button'/>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
