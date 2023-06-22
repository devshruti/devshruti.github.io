import {
    AiFillGithub, AiOutlineMail
  } from "react-icons/ai";
  import { FaLinkedinIn, FaHome, FaPhone } from "react-icons/fa";
  import { GrMail } from "react-icons/gr"
  import styled from "styled-components";

export const Contact = () => {
    return(
        <DIV id="contact">
        <div id="contactME">
            <h2 >Contact Me</h2>
            <div className="contactD">

            <div className="contact-left">
             <p><FaHome/> {" "} Bhopal, Madhya Pradesh (462030)</p>
             <p id="contact-phone"> <FaPhone/>{" "}8962699849 </p>  
             <a id="contact-email" href="https://sendevshruti@gmail.com" > <AiOutlineMail/> sendevshruti@gmail.com </a>
            </div>

            <div className="contact-icons-right" >
                <ul className="icons" style={{display:"flex",paddingLeft:"30%"}}>
                  <li className="social-icons" style={{paddingRight:"40px"}}>
                    <a id="contact-github"
                     href="https://github.com/devshruti"
                     style={{ color: "#c8f1bc" }}
                     target="_blank" 
                     rel="noopener noreferrer"
                     >
                        <AiFillGithub size={40}/>
                     </a>
                  </li>
                  <li className="social-icons" style={{paddingRight:"40px"}}> 
              <a id="contact-linkedin"
                href="https://www.linkedin.com/in/devshruti-sen-2ba3a5202/"
                style={{ color: "#c8f1bc" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={40}/>
              </a>
            </li>
            <li className="social-icons">
              <a 
                href="https://sendevshruti@gmail.com"
                style={{ color: "#c8f1bc" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
               <GrMail size={40}/>
              </a>
            </li>
                </ul>
            </div>
            </div>
            <p className="text"> Designed and Developed by Devshruti Sen</p>
            <br />
         </div>
   </DIV>
    )
}

const DIV = styled.div`
  margin: auto 0;
  width: 100%;
  padding-top: 3rem ;
  background-color: rgb(0, 0, 0);
  /* bottom: 0 ; */
  text-align: center;
#contactME h2{
    font-size:1.8rem;
    /* color: #c8f1bc;  */
}
#contactME {
  bottom: 0 ;
  padding: 8px;
  text-align: center;
  font-size: 18px;
}
.contact-left{
  text-align: left;
  margin-left: 15%;
}
.contactD{
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;     
    color: #c8f1bc; 
}

.contactD p{
    margin: 10px ;  
    color: #c8f1bc; 
}

.contactD a{
    margin: 10px ;  
    color: #c8f1bc; 
}

.text{
    margin: 3%;
    /* color: #c8f1bc;  */
}
.icons{
    margin-top: 5%;
}
@media screen and (max-width: 650px) {
    .contactD{
    grid-template-columns: 1fr; 
} 
.text{
    margin: 5%;
    
}
.icons{
    margin-top: -5%;
    margin-left: -12%;
    margin-bottom: 2%;
}
p{
    font-size: 16px;
}
.contact{
    font-size:1.8rem;
    margin-bottom: 3%;
    text-align: justify;
    margin-left: 15%;
}
}
`