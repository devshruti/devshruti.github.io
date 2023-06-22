import { Route, Routes } from "react-router-dom"
import { About } from "../routes/About"
import { Home } from "../routes/Home"
import { Skill } from "../routes/Skills"
import { Project } from "../routes/Projects"
import { Contact } from "./Contact"

export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skill/>} />
            {/* <Route path="/contact" element={<Contact/>} /> */}
            <Route path="/projects" element={<Project/>} />
            <Route path="*" element={<h3>404 Page Not Found</h3>} />
   </Routes>
    )
}