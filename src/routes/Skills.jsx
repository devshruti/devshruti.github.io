import {SiMongodb, SiReact, SiExpress, SiChakraui,  SiPostman, SiNetlify, SiReplit} from "react-icons/si"
import {TbBrandJavascript, TbBrandRedux, TbBrandSlack, TbBrandCodesandbox} from "react-icons/tb"
import {DiNodejsSmall,DiVisualstudio, DiCss3, DiHtml5} from "react-icons/di"
import styled from "styled-components";

export const Skill = () => {
    return (
      <DIV id="skills">       
         <div id="skillsshow">
          <h1>SKILLS</h1>
          <div className="skills-card">
          <div className="skill1" >
               <SiChakraui size={75}  color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >ChakraUI</h2>
            </div>
            <div className="skill1">
               <DiCss3 size={75} className="skills-card-img" color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >CSS</h2>
            </div>
           <div className="skill2">
               <SiReact size={75} className="skills-card-img"  color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >React</h2>
            </div>
            <div className="skill1">
               <TbBrandRedux size={75} className="skills-card-img" color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >Redux</h2>
            </div>
            <div className="skill1">
               <TbBrandJavascript size={75} className="skills-card-img" color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >JavaScript</h2>
            </div>
            <div className="skill1">
               <SiMongodb size={75} className="skills-card-img" color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >Mongodb</h2>
            </div>
            <div className="skill1" >
               <SiExpress size={75} className="skills-card-img"  color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >Express.js</h2>
            </div> 
            <div className="skill1">
               <DiHtml5 size={75} className="skills-card-img" color="#3dff08"/>
               <h2 style={{marginTop:"-10px", color:"#d0f3c6"}} >HTML</h2>
            </div>
            <div className="skill1">
               <DiNodejsSmall className="skills-card-img" size={75}  color="#3dff08"/>
               <h2 className="skills-card-name" style={{marginTop:"-10px", color:"#d0f3c6"}} >Node.js</h2>
            </div>
            
            {/* <div className="skill1" style={{border: "none", boxShadow:"none"}}>
               <DiNodejs size={75}  color="#3dff08"/>
            </div> */}
            {/* <img className="skills-card-img" src="path/to/skill-image.jpg" alt="Skill Image" />
            <p className="skills-card-name">Skill Name</p> */}
          </div>
          <br />
          <br />
          <h1>TOOLS</h1>
        <div className="tools-card">
          <div className="tool1">
            <DiVisualstudio size={75} className="skills-card-img"  color="#3dff08"/>
               <h2 style={{marginTop:"-10px", color:"#d0f3c6"}} >Visual Studio</h2>
          </div>
          <div className="tool1">
            <SiPostman size={75} className="skills-card-img" color="#3dff08"/>
               <h2 style={{marginTop:"-10px", color:"#d0f3c6"}} >Postman</h2>
          </div>
          <div className="tool1">
            <SiNetlify size={75}  color="#3dff08"/>
               <h2 style={{marginTop:"-10px", color:"#d0f3c6"}} >Netlify</h2>
          </div>
          <div className="tool1">
            <TbBrandSlack size={75}  color="#3dff08"/>
               <h2 style={{marginTop:"-10px", color:"#d0f3c6"}} >Slack</h2>
          </div>
          <div className="tool1">
            <SiReplit size={75}  color="#3dff08"/>
               <h2 style={{marginTop:"-10px", color:"#d0f3c6"}} >Replit</h2>
          </div>
          <div className="tool1">
            <TbBrandCodesandbox size={75}  color="#3dff08"/>
               <h2 style={{marginTop:"-10px", color:"#d0f3c6"}} >Code Sandbox</h2>
          </div>
        </div>
        </div>
        </DIV>

      );
}

const DIV = styled.div`
#skillsshow{
margin-bottom: 15%;
}
#skillsshow h1{
  font-size: 2.5rem;
  margin-bottom: 2%;
  margin-top: 5%;
}
.skills-card{
  margin: auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.tools-card{
  margin: auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
  .skills-card>div{
    /* margin: auto; */
  font-size: 4.5em ;
  margin: 15px ;
  padding: 10px ;
  /* opacity: 1; */
  border: 1.7px solid #7bf65a ;
  vertical-align: middle ;
  text-align: center ;
  border-radius: 5px ;
  display: table ;
  box-shadow: 4px 5px 4px 3px #a3eb90 ;
  overflow: hidden ;
  transition: all 0.4s ease 0s ;
  cursor: pointer;
 }
  .skills-card>div:hover::after{
   opacity: 1;
  }

  .skills-card>div:after{
    content: "";
    font-size: 1.8rem;
    opacity: 0;
    /* letter-spacing: 2px; */
    position: absolute;
    color: #7bf65a;
    text-align: center;
    /* width: 100%; */
    margin: 4% -4%;
	 -webkit-transition: all 0.3s ease-out;
	 transition: all 0.3s ease-out;
  }
  
  .tools-card>div{
    font-size: 4.5em ;
  margin: 15px ;
  padding: 10px ;
  opacity: 0.93 ;
  border: 1.7px solid #7bf65a  ;
  vertical-align: middle ;
  text-align: center ;
  border-radius: 5px ;
  display: table ;
  box-shadow: 4px 5px 4px 3px #a3eb90 ;
  overflow: hidden ;
  transition: all 0.4s ease 0s ;
  }
  
  @media screen and (max-width: 670px){
.skills-card{
  margin: auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.tools-card{
  margin: auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
#skillsshow h1{
  font-size: 2rem;
  margin-bottom: 2%;
  margin-top: 8%;
}
  }
  
`