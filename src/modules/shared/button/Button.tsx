import { FC } from "react";

interface ButtonProps {
    name: string;
    onClick: ()=> void;
}	
const Button: FC<ButtonProps> = ({name, onClick}) => {
    return( <button onClick={onClick}>
        {name}
        </button>);
   
}
export default Button;