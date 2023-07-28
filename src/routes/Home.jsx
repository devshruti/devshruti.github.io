import Img from "../assets/uimage-fotor-bg-remover-202306042118.png"
import styled from "styled-components";
import myPic from "../assets/pic-20230604232424.png"
import Type from "./Type";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <DIV id="home">
      <div className="home-header">

        <div className="content">
          <h1>Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave" >👋🏻</span>
          </h1>
          <br />
          <h1 className="heading-name">
            I'M
            <strong id="user-detail-name" className="main-name" style={{ color: "#3dff08", }}> DEVSHRUTI SEN</strong>
          </h1>
          <br />
          <div className="introduction">
          <p>I'm from  <span style={{ color: "#3dff08" }}>Bhopal, India</span>. 
          I'm a graduate in engineering with a specialization in <span style={{ color: "#3dff08" }}>electronics and communication</span> from SIRT, Bhopal. 
          Currently, I am a student at <span style={{ color: "#3dff08" }}>Masai School</span>, where I continue to refine my coding abilities through immersive hands-on projects.</p>
          </div>
          
          <div className="typewriter">
            <Type />
          </div>
          <br />
          <Link
            id="resume-link-2"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1OvEn7SUFGb1epXVRuzKJpjfILJnfP_dA/view?usp=sharing"
              )
            }
            target={"_blank"}
            download="Devshruti-Sen-Resume.pdf"
          >
            <button id="resume-button-2" >
              Resume
            </button>
          </Link>
        </div>
        <div className="introImg">
          <img className="home-img" src={myPic} alt="" />
        </div>
        {/* <div className="image">
          <img src={Img} alt="icon" />
        </div> */}
      </div>
      {/* <div className="explore">
        <div id="user-detail-intro" className="introduction">
          <h1>Explore my background</h1>
          <p>I'm from  <span style={{ color: "#3dff08" }}>Bhopal, India</span></p>
          <p>I'm a graduate in engineering with a specialization in <span style={{ color: "#3dff08" }}>electronics and communication</span> from SIRT, Bhopal.</p>
          <p>Throughout my college journey, I actively organized diverse events, developing valuable skills along the way.</p>
          <p> Currently, I am a student at <span style={{ color: "#3dff08" }}>Masai School</span>, where I continue to refine my coding abilities through immersive hands-on projects.</p>
          <p>Beyond my love for technology, I find immense fulfillment in <span style={{ color: "#3dff08" }}>cooking</span> and <span style={{ color: "#3dff08" }}>teaching</span>.</p>
        </div>
        <div className="introImg">
          <img className="home-img" src={myPic} alt="" />
        </div>
      </div> */}
    </DIV>
  );
};

const DIV = styled.div`
  
  .home-header{
    display: flex;
    margin-bottom: 10%;
  }

  #resume-button-2{
    background-color: black;
    color: #fff;
    padding: 1% 2%;
    width: 120px;
    height: 50px;
    font-size: 24px;
    font-weight: 500;
    border-radius: 10px;
    box-shadow: 4px 5px 4px 3px #a3eb90;
    animation-name: button;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  }
  @keyframes button {
  from {box-shadow: 4px 5px 4px 3px #a3eb90;background-color: #4c4f4b;}
  to {box-shadow: 4px 5px 4px 3px #37f403;background-color: black;}
}
    .content{ 
      width: 60%;
        margin-top: 10%;
        margin-left: 15%;
        text-align: left;
    }
    
    .content h1{
      font-size: 2.8rem;
    }
    .typewriter{
        color: #3dff08;
        margin-top: 5%;
        margin-bottom: 2%;
        text-align: "left";
        font-size: 2.4rem;
    }
    .wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2s;/* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}
img{
  width: 90%;
}
/* .image img{
  width: 180%;
} */
/* .image{
  animation-name: image-anime;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin-top: 10%;
  margin-left: -20%;
} */
/* .explore{
  margin: 8% 15%;
  display: flex;
  margin-bottom: -2%;
} */
.introImg {
  margin-top: 12%;
  margin-left: -12%;
}
/* .introImg img{
  width: 70%;
  border: 1px solid #010101;
  border-radius: 35%;
  background-color: #8afd6b;
} */
.home-img{
  width: 70%;
  border: 1px solid #010101;
  border-radius: 35%;
  position: relative;
  background-color: #8afd6b;
  animation-name: pic;
  animation-duration: 4s;
  animation-iteration-count: 1;
}
  @keyframes pic {
 from {background-color: #8afd6b; left:100px; top:0px;}
  to  {background-color: #8afd6b; left:0px; top:0px;}
}
.introduction{
  width: 80%;
  text-align: left;
}
.introduction p{
  font-size: 1.3rem;
  font-weight: 400;
  text-align: justify;
}
@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}

    @media screen and (max-width:990px) and (min-width: 401px) {
        .content{
            font-size: 1.2rem;
        }
        .home-header{
    display: block;
  }
  .content{
    margin-left: 17%;
    text-align: center;
  }
  .typewriter{
        font-size: 2.1rem;
    }
    .introImg{
  width: 80%;
  margin: auto;
      margin-top: 80px;
}
.introduction{
  width: 100%;
  margin: auto;
}
    }

    @media screen and (max-width:400px) {
        .content{
            font-size: 0.7rem;
    text-align: center;
        }
        .home-header{
    display: block;
  }
  .content{
    margin-left: 17%;
  }
  .typewriter{
        font-size: 1.8rem;
    }
    .introImg{
      margin-top: 70px;
    }
    img{
  width: 0%;
}
/* .explore{
margin: 15%;
  display: block;
} */
.introduction{
  width: 100%;
  margin: auto;
}
/* .introduction h1{
  font-size: 2rem;
} */
.introduction p{
  font-size: 1.2rem;
}
    }
  `