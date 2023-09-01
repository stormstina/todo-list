import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencil,
    faTrashCan,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Button = ({ type, aria, onClick = () => {}, disabled = false }) => {
    let buttonDesign = {};

    switch (type) {
        case "edit":
            buttonDesign = {
                content: <FontAwesomeIcon icon={faPencil} />,
                classes: "bg-warning text-white border",
                aria,
            };
            break;
        case "delete":
            buttonDesign = {
                content: <FontAwesomeIcon icon={faTrashCan} />,
                classes: "bg-transparent text-danger border border-danger",
                aria,
            };
            break;
        default:
            buttonDesign = {
                content: <FontAwesomeIcon icon={faPlus} />,
                classes: "bg-primary text-white border",
                aria,
            };
            break;
    }

    const buttonClasses = `h-full px-5 py-2 font-medium rounded-md ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
    } ${buttonDesign.classes}`;

    const handleClick = () => {
        if (!disabled) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={buttonClasses}
            aria-label={buttonDesign.aria}
            disabled={disabled}
        >
            {buttonDesign.content}
        </button>
    );
};

export default Button;
