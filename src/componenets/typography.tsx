import {TypographyProps} from "./types/typography";

export function Heading({title, size, colorClass}: TypographyProps) {
    const fontSize : number = size ? size : 2;
    const color : string = colorClass ? colorClass : 'text-black-50';
    return <h1 className={`h${fontSize} ${color}`}>{title}</h1>
}