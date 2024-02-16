import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {
  AiOutlineContacts,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillHome,
  AiOutlineDownload
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const changeNavColor = () => {
    if (window.scrollY >= 10) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <DIV id="nav-menu" >
      <div className={navColor ? "header header-bg" : "header"}>
        <h1>D<span style={{ color: "#3dff08" }}>S</span>. </h1>
        <ul onClick={handleClick} className={click ? "nav-links active" : "nav-links"}>
          <li>
            <a className="nav-link home" href="#home">
              <AiFillHome style={{ marginBottom: "-2px" }} />
              Home
            </a>
          </li>
          <li>
            <a className="nav-link about" href="#about">
              <AiOutlineUser style={{ marginBottom: "-2px" }} />
              About
            </a>
          </li>
          <li>
            <a className="nav-link skills" href="#skills">
              <ImBlog style={{ marginBottom: "-2px" }} /> Skills
            </a>
          </li>
          <li>
            <a className="nav-link projects" href="#projects" force="true">
              <AiOutlineFundProjectionScreen style={{ marginBottom: "-2px" }} /> Projects
            </a>
          </li>
          <li>
            <a className="nav-link contact" href="#contact">
              <AiOutlineContacts style={{ marginBottom: "-2px" }} /> Contact
            </a>
          </li>
          <li className="nav-link resume">
            <a
              id="resume-link-1"
              href="https://drive.google.com/file/d/1mjTsav8nN4WUfsrndrxmKdpAh9gbl9T1/view?usp=sharing"
              target="_blank"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1mjTsav8nN4WUfsrndrxmKdpAh9gbl9T1/view?usp=sharing",
                  "_blank"
                );
                setTimeout(() => {
                  window.location.href = "https://drive.google.com/uc?export=download&id=1mjTsav8nN4WUfsrndrxmKdpAh9gbl9T1";
                }, 1000); // Delay to allow the file to load before initiating the download
              }}
            >
              <button id="resume-button-1" style={{ color: "#fff" }}>Resume
                <span>
                  <AiOutlineDownload
                    style={{ marginBottom: "-2px" }}
                    fontSize={"1.5rem"}
                    color="white"
                  />
                </span>
              </button>
            </a>
          </li>


        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
   .header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  transition: 0.3s;
  width: 100%;
  height: 90px;
  z-index: 10;
}
.header-bg{
  background-color: #323232f8 ;
  opacity: 0.8;
  transition: 0.5s;
}
/* .header-bg ul li a button{
  background-color: #323232f8 ;
  opacity: 0.8;
  transition: 0.5s;
} */
.nav-links {
  display: flex;
  }
  .nav-links li{
    padding: 0 1rem;
  }
  .nav-links li a{
    font-size: 1.2rem;
    font-weight: 500;
    
  }
  /* #resume-link-1{
margin-bottom: 5%;
  } */
  #resume-button-1{
    cursor: pointer;
    font-size: 1.3rem;
margin-bottom: 5%;
    font-weight: 500;
    background-color: black;
    border: 2px #3dff08 solid;
    width: 125px;
    height: 32px;
    border-radius: 5px;
    padding-bottom: 10px;
  }
  #resume-button-1:hover{
   background-color: #2bba00b3;
    /* color: #88ed6c; */
    /* font-size: 1.6rem; */
  }
  h1{
    font-size: 2.2rem;
    margin-left: 8%;
  }
  #nav-menu a h1:hover{
    /* color: #3dff08; */
    font-size: 2.2rem;
  }
  .nav-links li a:hover{
    color: #3dff08;
    /* color: #88ed6c; */
    font-size: 1.6rem;
  }
   /* a:after:active{
    text-decoration: underline;

  } */
  .hamburger{
    display: none;
    cursor: pointer;
    color: #fff;
  }
  
  .hamburger:hover{
    color: #3dff08;
  }

  @media screen and (max-width:1040px){
    .nav-links{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      background: rgba(34, 37, 33, 0.9);
      position: absolute;
      top: 0;
      left: -100%;
      z-index: -3;
      transition: 0.3s;
    }
    .nav-links.active{
      left: 0;
    }
    .nav-links li{
      padding: 1rem 0;
    }
    .nav-links li a{
      font-size: 2rem;
    }
    .hamburger{
    display: initial;
  }
  }

`;