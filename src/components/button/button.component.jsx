import './button.styles.scss'

const BUTTON_TYPES = {
    google: "google-sign-in",
    inverted: "inverted",
}

const Button = ({ children, btnType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPES[btnType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;