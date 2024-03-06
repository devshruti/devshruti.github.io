import bookoze from "../assets/bookoze1.png";
import telephama from "../assets/telepharm.png";
import pharm from "../assets/pharmeasy.png";
import digitron from "../assets/digitron.png";
import img from "../assets/K8DN7t.jpg";
import tradehub from "../assets/tradehub.png"
import styled from "styled-components";

export const Project = () => {
  return (
    <DIV id="projects">
      <h2 id="heading" >PROJECTS</h2>
      <div id="project">
        <div className="project-card">
          <img src={tradehub} alt="Project Image" />
          <h1 className="project-title">Tradehub</h1>
          <p className="project-description">Tradehub is a trading website. This web application allows users to sign up, log in, create a demat account, maintain a portfolio, and buy stocks.</p>
          <p className="project-tech-stack">Tech Stack Used : <span style={{ color: "#3dff08" }}>React, chakraUI, CSS, Javascript, Node.js, Express.js, MongoDB</span></p>
          <br />
          <a className="project-github-link" target="_blank" href="https://github.com/devshruti/TradeHub">GitHub</a>
          <a className="project-deployed-link" target="_blank" href="https://tradehub.netlify.app/">Live</a>
          <br />
          <br />
        </div>
        <div className="project-card">
          <img src={telephama} alt="Project Image" />
          <h1 className="project-title">TelePharmacy</h1>
          <p className="project-description">TelePharmacy is a digital healthcare platform, offers online doctor consultations. Users can access a wide range of medical services conveniently through this platform.</p>
          <p className="project-tech-stack">Tech Stack Used : <span style={{ color: "#3dff08" }}>React, Redux, chakraUI, Javascript, CSS</span></p>
          <br />
          <a className="project-github-link" target="_blank" href="https://github.com/devshruti/TelePharmacy">GitHub</a>
          <a className="project-deployed-link" target="_blank" href="https://grand-conkies-b7c025.netlify.app/">Live</a>
          <br />
          <br />
        </div>
        <div className="project-card">
          <img src={digitron} alt="Project Image" />
          <h1 className="project-title">Digitron</h1>
          <p className="project-description">Digitron: Your Gateway to Interview Success! Unlock your potential with our immersive interview environment designed to help you excel in your job interviews.</p>
          <p className="project-tech-stack">Tech Stack Used : <span style={{ color: "#3dff08" }}> OpenApi JavaScript, React, chakraUI, Tailwind, Node, Express, Mongodb</span></p>
          <br />
          <a className="project-github-link" target="_blank" href="https://github.com/devshruti/Digitron">GitHub</a>
          <a className="project-deployed-link" target="_blank" href="https://frontend-payalsahuj.vercel.app/">Live</a>
          <br />
          <br />
        </div>
        <div className="project-card">
          <img src={bookoze} alt="Project Image" />
          <h1 className="project-title">Bookoze</h1>
          <p className="project-description">Bookoze is a book ordering website, essentially a Barnes & Noble clone. Users can easily browse and purchase books through this platform.</p>
          <p className="project-tech-stack">Tech Stack Used : <span style={{ color: "#3dff08" }}> HTML, CSS, JavaScript</span></p>
          <br />
          <a className="project-github-link" target="_blank" href="https://github.com/devshruti/Bookoze">GitHub</a>
          <a className="project-deployed-link" target="_blank" href="https://exquisite-medovik-dccfcb.netlify.app/index.html">Live</a>
          <br />
          <br />
        </div>
        <div className="project-card">
          <img src={pharm} alt="Project Image" />
          <h1 className="project-title">Pharmacy</h1>
          <p className="project-description">Pharmacy is a user-friendly website, that serves as a clone of the popular PharmEasy website. This website aims to replicate the features and functionalities of PharmEasy. It offers delivery services for all your medication needs at affordable prices.</p>
          <p className="project-tech-stack">Tech Stack Used : <span style={{ color: "#3dff08" }}>React, chakraUI, CSS, Javascript</span></p>
          <br />
          <a className="project-github-link" target="_blank" href="https://github.com/devshruti/-boss-page-9475">GitHub</a>
          <a className="project-deployed-link" target="_blank" href="https://6502bafb39a8712d2b6c0daf--pharmaaacy.netlify.app/">Live</a>
          <br />
          <br />
        </div>

        {/* <div className="project-card">
          <img src={img} alt="Project Image" />
            <h1 className="project-title">Project Title</h1>
             <p className="project-description">Project Description</p>
            <p className="project-tech-stack">Tech Stack Used</p>
            <br />
            <a className="project-github-link" target="_blank" href="link-to-github-repo">GitHub</a>
            <a className="project-deployed-link" target="_blank" href="link-to-deployed-site">Live</a>
           <br />
            <br />
          </div> */}
      </div>
    </DIV>
  );
}

const DIV = styled.div`
margin-bottom:10%;
  color:#fff;
#heading{
  margin:auto;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  padding-top: 5%;
  padding-bottom: 2%;
  color:#fff;
}
  img{
    width: 80%;
    margin: 3%;
    box-shadow: rgb(112, 190, 94) 0px 20px 30px -10px;
    border-radius: 5%;
    /* box-shadow: rgba(115, 249, 58, 0.919) 0px 30px 60px -12px inset, rgba(81, 103, 59, 0.771) 0px 18px 36px -18px inset; */
 }
  #project{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: space-between;
    }
    h1{
      font-size: 2rem;
      font-weight: 400;
    }
    a{
      border: 2px solid #c8f1bc;
      margin: 2%;
      padding: 2%;
      background-color: #3dff08; 
    }
    p{
      margin: 3%;
      text-align: justify;
    }
  .project-card{
    margin: 10%;
    padding: 3%;
    width: 420px;
    border-radius: 10%;
    box-shadow: rgb(112, 190, 94) 0px 20px 30px -10px;
    }

    @media screen and (max-width:1040px) and (min-width: 561px){
      #project{
    width: 80%;
    margin: auto;
    display: block;
    /* grid-template-columns: repeat(1,1fr);
    justify-content: space-between; */
    }
    h1{
      font-size: 1.8rem;
      font-weight: 400;
    }
    p{
      font-size: 1.3rem;
    }
    h2{
  padding-top: 16%;
  padding-bottom: 1%;
  margin:auto;
  text-align: center;
  font-size: 2.3rem;
  font-weight: 500;
  color:#3dff08;
}
  }
    @media screen and (max-width: 560px) {
      #project{
    width: 60%;
    display: block;
    margin: 10%;
    margin-left: 7%;
    }
    .project-card{
    margin: 10%;
    padding: 3%;
    width: 300px;
    border-radius: 10%;
    box-shadow: rgb(112, 190, 94) 0px 20px 30px -10px;
    }
    img{
      width: 85%;
      height: 160px;
    }
    h1{
      font-size: 1.4rem;
      font-weight: 400;
    }
    h2{
  padding-top: 15%;
  padding-bottom: 1%;
  margin:auto;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  color:#3dff08;
}
p{
  font-size: 1rem;
}
    a{
      display: block;
      width: 70%;
      margin: auto;
      margin-bottom: 2%;
    }
    }
`