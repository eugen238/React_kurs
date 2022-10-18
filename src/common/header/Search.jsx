import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const search = document.querySelector(".search");
  //   search.classList.toggle("active", window.scrollY > 100);
  // });

  return (
    <>
      <section className='search'>
        <div className='container flex10 c_flex'>
          <div className='logo width '>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Введите и нажмите enter...' />
            <i className=' arrow fa-solid fa-arrow-turn-down'></i>
          </div>

          <div className='icon f_flex width'>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
