import {ReactElement, useEffect, useState} from "react";
import {Wizard} from "../../componenets/wizzard";
import {InputField, SelectField} from "../../componenets/inputs";
import Card from "../../componenets/card";
import {Heading} from "../../componenets/typography";
import {createProject} from "../../redux/actions/projects";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function NewProject(): ReactElement {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [formData, setFormData] = useState<any>({
        name: '',
        description: '',
        employees: [],
        documents: [],
    });

    const [employee, setEmployee] = useState({
        name: '',
        title: ''
    });

    const [document, setDocument] = useState({
        type: 'link',
        name: '',
        description: '',
    });

    useEffect(() => {
        validateFirstPage();
    }, [formData]);

    const [firstPageIsValid, setFirstPageIsValid] = useState(false);

    function validateFirstPage() {
        const textareaIsValid = formData.description.length === 0 || formData.description.length >= 50;
        if (formData.name.length > 0 && textareaIsValid) {
            setFirstPageIsValid(true);
            return;
        }

        setFirstPageIsValid(false);
    }

    function setProjectName(name: string | number) {
        setFormData({
            ...formData,
            name: name.toString()
        });
    }


    function setProjectDescription(description: string | number) {
        setFormData({
            ...formData,
            description: description.toString()
        });
    }

    function addEmployee() {
        setFormData({
            ...formData,
            employees: [...formData.employees, employee]
        });

        setEmployee({
            name: '',
            title: ''
        })
    }

    function setEmployeeName(name: string | number) {
        setEmployee({
            ...employee,
            name: name.toString()
        })
    }

    function setEmployeeTitle(title: string | number) {
        setEmployee({
            ...employee,
            title: title.toString()
        })
    }

    function removeEmployee(employeeObject: object) {
        setFormData({
                ...formData,
                employees: formData.employees.filter((employee: object) => employee !== employeeObject
                )
            }
        )
    }

    function changeDocumentType(type: string) {
        setDocument({
            ...document,
            type
        })
    }

    function changeDocumentName(name: string | number) {
        return setDocument({
            ...document,
            name: name.toString()
        })
    }


    function changeDocumentDescription(description: string | number) {
        return setDocument({
            ...document,
            description: description.toString()
        })
    }

    function addDocument() {
        setFormData({
            ...formData,
            documents: [...formData.documents, document]
        });

        setDocument({
            type: 'link',
            name: '',
            description: '',
        })
    }

    function renderDocuments() : ReactElement {
        return formData.documents.map((document: any, key : number) => {
             if (document.type === 'description') {
                 return (<Card key={key}>
                    <Card.Header>
                        <Heading title={document.name} />
                    </Card.Header>
                    <Card.Body>
                        <div className="card-text">
                            <p>{document.description}</p>
                        </div>
                    </Card.Body>
                </Card>)
            }

            return <a key={key} href={document.description}>{document.name}</a>
        })
    }

    function saveProject() {
        dispatch(createProject({
            name: formData.name,
            description: formData.description,
            employees: formData.employees,
            documents: formData.documents
        }));

        navigation('/projects');
    }

    return <div>
        <Wizard>
            <Wizard.Page isPageFilled={firstPageIsValid}>
                <InputField
                    label={'Projekt név'}
                    type={'text'}
                    onChange={setProjectName}
                    placeholder={'projekt név'}
                    maxLength={255}
                />
                <InputField
                    label={'Projekt leírás'}
                    type={'textarea'}
                    onChange={setProjectDescription}
                    placeholder={'projekt név'}
                    maxLength={500}
                />
            </Wizard.Page>
            <Wizard.Page isPageFilled>
                <InputField
                    label={'Dolgozó Neve'}
                    type={'text'}
                    onChange={setEmployeeName}
                    value={employee.name}
                    placeholder={'Teszt Elek'}
                />
                <InputField
                    label={'Munka terület'}
                    type={'text'}
                    onChange={setEmployeeTitle}
                    value={employee.title}
                    placeholder={'Fejlesztő'}
                />
                <button className={'btn-success btn'} onClick={addEmployee}>Hozzáadás</button>
                {formData.employees.map((employee: { name: string, title: string }, index: number) => {
                    return <div className={'employee-chip'} key={index}>
                        <p>
                            {employee.name}<br/>
                            <span>{employee.title}</span>
                            <span className="remove" onClick={() => removeEmployee(employee)}>X</span>
                        </p>
                    </div>
                })}
            </Wizard.Page>
            <Wizard.Page>
                <SelectField
                    label={'típus'}
                    onChange={changeDocumentType}
                    options={[
                        {value: 'link', label: 'Link'},
                        {value: 'description', label: 'Leírás'}
                    ]}
                />
                <InputField
                    value={document.name}
                    label={'Kapcsolódó anyag neve'}
                    type={'text'}
                    onChange={changeDocumentName}
                    placeholder={'Project spacifikáció...'}
                />
                <InputField
                    value={document.description}
                    label={document.type === 'link' ? 'Link címe' : 'Leírás'}
                    type={document.type === 'link' ? 'text' : "textarea"}
                    onChange={changeDocumentDescription}
                />
                <button className={'btn btn-success'} onClick={addDocument}>Hozzá adás</button>
                <br />
                {renderDocuments()}
                <br />
                <button className={'btn btn-success'} onClick={saveProject}>Mentés</button>
            </Wizard.Page>
        </Wizard>
    </div>
}