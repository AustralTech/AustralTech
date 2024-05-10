import PropTypes from "prop-types";

const Button = ({ type, title, variant, onClick, onClose }) => {
  return (
    <button type={type} className={`flexCenter gap-3 border ${variant}`} onClick={onClick} onClose={onClose}>
      <label className="whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Button
