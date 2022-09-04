import {PropsWithChildren} from "react";

export default function Card(props : PropsWithChildren) {
    return <div className="col-md-4 mb-3">
        <div className={'card'}>
            {props.children}
        </div>
    </div>
}

Card.Header = function Header(props : PropsWithChildren) {
    return <div className={'card-header'}>
        {props.children}
    </div>
}

Card.Body = function Body(props : PropsWithChildren) {
    return <div className={'card-body'}>
        {props.children}
    </div>
}

Card.Image = function Image({src, alt} : {src : string, alt? : string}) {
    return <img className="card-img-top img-fluid" src={src} alt={alt}/>
}
