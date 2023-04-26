import { ReactNode } from "react";

interface buttonProps{
    children: ReactNode;
}

function Button(props: buttonProps){
    return <button className="btn btn-primary">{props.children}</button>
}

export default Button;