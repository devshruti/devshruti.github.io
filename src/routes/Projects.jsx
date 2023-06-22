import bookoze from "../assets/bookoze1.png";
import telephama from "../assets/telepharm.png" ;
import pharm from "../assets/pharmeasy.png" ;
import tripwiser from "../assets/tripwiser.png" ;
import img from "../assets/K8DN7t.jpg" ;
import tradehub from "../assets/tradehub.png"
import styled from "styled-components";

export const Project = () => {
    return (
      <DIV id="projects">
      <h2>PROJECTS</h2>
        <div id="project">
          <div className="project-card">
            <img src={telephama} alt="Project Image" />
            <h1 className="project-title">TelePharmacy</h1>
            <p className="project-description">TelePharmacy 24x7 is a digital healthcare platform created in just 5 days by a team of four members. It offers online doctor consultations, online pharmacy services, and at-home diagnostic tests. Users can access a wide range of medical services conveniently through this platform.</p>
            <p className="project-tech-stack">Tech Stack Used : <span style={{color:"#3dff08"}}>React, Redux, chakraUI, Javascript, CSS, CSS</span></p>
            <br />
            <a className="project-github-link" target="_blank" href="https://github.com/Shahid0143/tan-shock-2774">GitHub</a>
            <a className="project-deployed-link" target="_blank" href="https://grand-conkies-b7c025.netlify.app/">Live</a>
           <br />
            <br />
          </div>
          <div className="project-card">
            <img src={tradehub} alt="Project Image" />
            <h1 className="project-title">Tradehub</h1>
             <p className="project-description">Tradehub is a trading website, developed in just 5 days by team of three members. This web application allows users to sign up, log in, create a demat account, maintain a portfolio, and buy stocks.</p>
             <p className="project-tech-stack">Tech Stack Used : <span style={{color:"#3dff08"}}>React, chakraUI, Javascript, CSS, Node.js, Express.js, MongoDB</span></p>
           <br />
            <a className="project-github-link" target="_blank" href="https://github.com/Prashantrathour/stoic-sack-3017/tree/main">GitHub</a>
            <a className="project-deployed-link" target="_blank" href="https://tradehub.netlify.app/">Live</a>
           <br />
            <br />
          </div>
          <div className="project-card">
            <img src={bookoze} alt="Project Image" />
            <h1 className="project-title">Bookoze</h1>
            <p className="project-description">Bookoze is a book ordering website, essentially a Barnes & Noble clone, that was developed by a team of five members within a tight deadline of 5 days. Users can easily browse and purchase books through this platform.</p>
            <p className="project-tech-stack">Tech Stack Used : <span style={{color:"#3dff08"}}>HTML, CSS, JavaScript</span></p>
            <br />
            <a className="project-github-link" target="_blank" href="https://github.com/Sourabh12321/elated-silver-5908">GitHub</a>
            <a className="project-deployed-link" target="_blank" href="https://exquisite-medovik-dccfcb.netlify.app/index.html">Live</a>
           <br />
            <br />
          </div>
          <div className="project-card">
            <img src={pharm} alt="Project Image" />
            <h1 className="project-title">Pharmacy</h1>
            <p className="project-description">Pharmacy is a user-friendly website, developed in just 5 days by a single member, that serves as a clone of the popular PharmEasy website. This website aims to replicate the features and functionalities of PharmEasy. It offers delivery services for all your medication needs at affordable prices.</p>
            <p className="project-tech-stack">Tech Stack Used : <span style={{color:"#3dff08"}}>React, chakraUI, Javascript, CSS</span></p>
            <br />
            <a className="project-github-link" target="_blank" href="https://github.com/devshruti/-boss-page-9475">GitHub</a>
            <a className="project-deployed-link" target="_blank" href="https://6429ae19a6d9132112ddb61c--pharmacydev.netlify.app/">Live</a>
           <br />
            <br />
          </div>
          <div className="project-card">
            <img src={tripwiser} alt="Project Image" />
            <h1 className="project-title">Tripwiser</h1>
            <p className="project-description">Tripwiser is an individual project that serves as a clone of the well-known TripAdvisor website. Developed within a span of 5 days. TripAdvisor, is an American company renowned for operating online travel agencies, comparison shopping websites, and mobile apps that incorporate user-generated content.</p>
            <p className="project-tech-stack">Tech Stack Used : <span style={{color:"#3dff08"}}>HTML, CSS, JavaScript</span></p>
            <br />
            <a className="project-github-link" target="_blank" href="https://github.com/devshruti/dispensable-jellyfish-9708">GitHub</a>
            <a className="project-deployed-link" target="_blank" href="https://musical-frangollo-b49c84.netlify.app/">Live</a>
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

const DIV=styled.div`
margin-bottom:10%;
h2{
  padding-top: 6%;
  padding-bottom: 1%;
  margin:auto;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  color:#3dff08;
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
      /* color: #2ffa07; */
      
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
    display: grid;
    grid-template-columns: repeat(1,1fr);
    justify-content: space-between;
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
    @media screen and (max-width: 560px){
      #project{
    width: 60%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    justify-content: space-between;
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