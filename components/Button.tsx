import React from 'react';
import styles from '../styles/components/Button.module.scss';

interface Props {
    children : string,
    palette? : "primary" | "secondary" | "success" | "danger" | "warning",
    variant? : "outlined" | "ghost" | "link",
    onClick?,
    type? : "button" | "submit" | "reset",
}

const Button = (props: Props) => {

    var className = `${styles.default} `
    switch (props.palette) {
        case "primary":
            className += `${styles.primary} `
            break;
        case "secondary":
            className += `${styles.secondary} `
            break;
        case "success":
            className += `${styles.success} `
            break;
        case "danger":
            className += `${styles.danger} `
            break;
        case "warning":
            className += `${styles.warning} `
            break;
        default:
            break;
    }
    switch (props.variant) {
        case "outlined":
            className += `${styles.outlined} `
            break;
        case "ghost":
            className += `${styles.ghost} `
            break;
        case "link":
            className += `${styles.link} `
            break;
        default:
            break;
    }

    return (
        <button type={props.type} className={className} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button
