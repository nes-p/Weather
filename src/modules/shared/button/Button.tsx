import { FC } from "react";
import "./button.css";

interface ButtonProps {
    name: string;
    onClick: ()=> void;
}	
const Button: FC<ButtonProps> = ({name, onClick}) => {
    return( <button onClick={onClick} className="local-button">
        {name}
        </button>);
   
}
export default Button;