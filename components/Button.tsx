import styles from '../styles/components/Button.module.css';

interface Props {
    children : string
}

const Button = (props: Props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Button
