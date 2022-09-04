import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAllProject} from "../../redux/actions/projects";
import {useEffect} from "react";
import Card from "../../componenets/card";
import {Heading} from "../../componenets/typography";

export default function ProjectList() {
    const projects = useSelector((state: any) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProject())
    }, [dispatch]);

    return (<>
        <h1>Projects</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to={'/new'} className="btn btn-primary">
                        <button className={'btn btn-primary'}>Új project</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                {projects.map((project: any) => {
                    const shortName = project.name.split(' ').map((word : string) => word[0]).join('').substring(0, 2);
                    return <Card key={'cark-key' + project.id}>
                        <Card.Image src={`https://dummyimage.com/600x400/95b5f1/fff&text=${shortName}`}></Card.Image>
                        <Card.Header>
                            <Heading title={project.name} />
                        </Card.Header>
                        <Card.Body>
                            <div className="card-text">
                                <p>{project.description}</p>
                            </div>
                        </Card.Body>
                    </Card>
                })}
            </div>
        </div>
    </>)
}
