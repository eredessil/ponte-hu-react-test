import {ChangeEvent} from "react";

export type InputFieldProps = {
    label: string;
    value?: string | number;
    type: 'text' | 'number' | 'password' | 'email' | 'textarea';
    onChange: (value: string | number) => void;
    placeholder?: string;
    maxLength?: number;
    options?: SelectFieldOptionProps[];
}

export type SelectFieldProps = {
    onChange: (value : string) => void;
    label: string;
    value?: string | number;
    placeholder?: string;
    maxLength?: number;
    options?: SelectFieldOptionProps[];
}

export type SelectFieldOptionProps = {
    value: number|string;
    label: string;
}