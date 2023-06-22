import styled from "styled-components";
import { SiNetlify, SiReact, SiMongodb } from "react-icons/si";
import { TbBrandJavascript, TbBrandRedux } from "react-icons/tb";
import { DiNodejsSmall, DiVisualstudio } from "react-icons/di";
import { MdHtml } from "react-icons/md";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";

export const About = () => {

    return (
     <DIV id="about" className="about section">
        <div className="section">
          <h1 className="me">About</h1>
         <div className="about-me">
          <div className="intro-text">
         <p id="user-detail-name">Hello! I' m <span style={{color:"#3dff08"}}>Devshruti Sen</span></p>
         <br />
          <p id="user-detail-intro">I'm an aspiring <span style={{color:"#3dff08"}}> MERN</span> (<span style={{color:"#3dff08"}}>MongoDB, Express.js, React.js, Node.js</span>)
             developer with a strong  interest in web development. </p>
             <br />
             {/* <p> I have invested significant time and effort into learning the MERN stack and honing my skills. I have completed several personal projects, including building interactive web applications and exploring different aspects of the MERN ecosystem.</p>
             <br />  */}
<p>I am proficient in front-end technologies such as <span style={{color:"#3dff08"}}> HTML, CSS, and JavaScript</span>. I have worked extensively with <span style={{color:"#3dff08"}}>React.js</span> and have gained experience in building responsive and user-friendly interfaces.</p> 
<br />
<p> On the back-end, I have worked with <span style={{color:"#3dff08"}}>Node.js</span> and <span style={{color:"#3dff08"}}>Express.js</span>, learning how to develop RESTful APIs and handle server-side logic.</p>
          <br />
          <p>Quick learner, detail-oriented, and eager to grow in the field.</p> <p> Let's connect and build something incredible together!</p>
          </div>
          <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <TbBrandRedux style={{margin:"auto"}} size={75}  color= "#3dff08" />
            </div>
            <div className="face2">
              <TbBrandJavascript  style={{margin:"auto"}} size={75} color= "#3dff08" />
            </div>
            <div className="face3">
              <DiVisualstudio style={{margin:"auto"}} size={75} color= "#3dff08" />
            </div>
            <div className="face4">
              <DiNodejsSmall style={{margin:"auto"}} size={75}  color= "#3dff08" />
            </div>
            <div className="face5">
              <SiReact style={{margin:"auto"}} size={75}  color= "#3dff08" />
            </div>
            <div className="face6">
              <SiNetlify style={{margin:"auto"}} size={75}  color= "#3dff08" />
            </div>
          </div>
        </div>
           </div>
           <div className="git-activity">
            <h1 >Github <span style={{color: "#3dff08"}}>Calender</span> </h1>
          {/* <img className="code" src={codeImg} alt="workCode" /> */}
          <div className="activity"
          style={{ width:["330px", "450px", "870px"],
          margin:"auto",
          marginBottom:"30px"}}>
            <GitHubCalendar
            username="devshruti"
            className="react-activity-calendar"
          />
          </div>
          
          </div>
          <div className="git-stats">
          <img id="github-streak-stats" style={{border:"2px solid #3dff08", borderRadius:"5px"}} src="https://github-readme-streak-stats.herokuapp.com?user=devshruti&theme=github-dark" />
          <img id="github-top-langs" style={{width:"470px"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=devshruti&layout=compact&theme=blue-green" />
          <img id="github-stats-card" style={{border:"3px solid #3dff08", borderRadius:"5px"}} src="https://github-readme-stats.vercel.app/api?username=devshruti&show_icons=true&theme=blue-green" />
         </div>
        </div>
        </DIV>
    )
}

const DIV = styled.div`
.section{
  margin-bottom: 10%;
}
.about-me{
  text-align: left;
  display: flex;
}

.me{
  padding-top: 5%;
  padding-bottom: 2%;
  margin:auto;
  text-align: center;
  font-size: 2.5rem;
  color:#3dff08;
}
.intro-text{
 width:60%;
 margin-top: 2%;
 margin-bottom: 6%;
 margin-left: 15%;
 margin-right: 32%;
 font-size: 22px;
 text-align: justify;
}

.git-activity h1{
  font-size: 2rem;
  margin-bottom: 2%;
}
.git-activity{
  margin: 2% 5%; 
}
.react-activity-calendar{
  margin:auto;
}
.activity{
}
.git-stats img{
  margin: 2%;
  width: 430px;
}
  img{
    width:100%;
  }

  .stage-cube-cont {
  width: 50%;
  height: 100%;
  top: 120%;
  bottom: 100;
  padding-top: 18%;
  margin-left: 0;
  position: absolute;
  right: 0;
  overflow: hidden;
}

.cubespinner {
  animation-name: spincube;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 12s;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 0px);

  .face1 {
    transform: translateZ(100px);
    }
  .face2 {
    transform: rotateY(90deg) translateZ(100px);
    }
  .face3 {
    transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
    }
  .face4 {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
    }
  .face5 {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
   }
  .face6 {
    transform: rotateX(-90deg) translateZ(100px);
   }
}

.cubespinner div {
  position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #94f65f;
    background: rgba(139, 148, 136, 0.927);
    text-align: center;
    font-size: 100px;
    /* opacity: 0; */
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

@keyframes spincube {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  16% {
    transform: rotateY(-90deg) rotateZ(90deg);
  }
  33% {
    transform: rotateY(-90deg) rotateX(90deg);
  }
  50% {
    transform: rotateY(-180deg) rotateZ(90deg);
  }
  66% {
    transform: rotateY(-270deg) rotateX(90deg);
  }
  83% {
    transform: rotateX(90deg);
  }
}


  @media screen and (max-width:850px) and (min-width: 501px) {
    .about-me{
  text-align: left;
  display: block;
}
.intro-text{
  margin-bottom: 15%;
 width:80%;
 margin-left: 10%;
 /* font-size: 28px; */
}
.intro-text p{
  font-size: 22px;
}
.img-profile{
 width:80%;
 margin-top: 9%;
}
.profile{
  width: 70%;
  margin: 20% 20%;
}
.cubespinner div {
  position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid #94f65f;
    background: rgba(139, 148, 136, 0.927);
    text-align: center;
    font-size: 100px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
    }

    @media screen and (max-width:500px) {
      .about-me{
  text-align: left;
  display: block;
}
.intro-text{
  margin-bottom: 15%;
 width:80%;
 margin-left: 10%;
}

p{
  font-size: 16px;
}
.img-profile{
 width:80%;
 margin-top: 9%;
}
.profile{
  width: 70%;
  margin: 20% 20%;
}
.cubespinner div {
  position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid #94f65f;
    background: rgba(139, 148, 136, 0.927);
    text-align: center;
    font-size: 100px;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
    }
`