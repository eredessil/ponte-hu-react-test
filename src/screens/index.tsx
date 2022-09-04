import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import ProjectList from "./project/List";
import ProjectDetails from "./project/Details";
import NewProject from "./project/New";
import {useEffect} from "react";

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            navigate('/projects');
        }
    })

    return <Routes>
        <Route path="/projects" element={<ProjectList/>}/>
        <Route path="/project/:id" element={<ProjectDetails/>}/>
        <Route path="/new" element={<NewProject/>}/>
    </Routes>
}
