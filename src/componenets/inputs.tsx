import {InputFieldProps, SelectFieldOptionProps, SelectFieldProps} from "./types/Inputs";
import {ChangeEvent, ReactElement, useEffect, useId, useState} from "react";

export function InputField(props : InputFieldProps) {
    const {type, placeholder, onChange, label, maxLength, value} = props;
    const [inputValue, setInputValue] = useState(value || '');
    const id : string = useId();

    function handleChange(event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
        setInputValue(event.currentTarget.value);
    }

    useEffect(() => {
        onChange(inputValue);
    }, [inputValue]);

    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    function renderInput(type : string) : ReactElement {
        if (type === 'textarea') {
            return <textarea className={'form-control'} id={id} placeholder={placeholder} value={inputValue} onChange={handleChange} maxLength={maxLength}/>
        }
        return <input type={type} className={'form-control'} id={id} placeholder={placeholder} value={inputValue} onChange={handleChange} maxLength={maxLength}/>
    }

    return <div className={'form-field-row mb-3'}>
        <label className={'form-label'} htmlFor="id">{label}</label>
        {renderInput(type)}
    </div>
}

export function SelectField(props: SelectFieldProps) {
    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        props.onChange(event.target.value);
    }

    return <div className={'form-field-row mb-3'}>
        <label className={'form-label'} htmlFor="id">{props.label}</label>
        <select className={'form-select'} id="id" onChange={handleChange}>
            {props.options?.map((option: SelectFieldOptionProps) =>
                <SelectField.Option key={option.value} value={option.value} label={option.label}/>)}
        </select>
    </div>
}

SelectField.Option = function SelectFieldOption(props: SelectFieldOptionProps) {
    return <option value={props.value}>{props.label}</option>
}

