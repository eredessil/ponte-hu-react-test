import {useParams} from "react-router-dom";

export default function ProjectDetails() {
    const params = useParams();

    return <div>
        <h1>Project Details</h1>
        <p>id: {params.id}</p>
    </div>
}