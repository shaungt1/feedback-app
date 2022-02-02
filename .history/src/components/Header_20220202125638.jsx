import PropTypes from 'prop-types'
import Modal from "./components/Modal";
import useModal from "./components/useModal";
import Button from './shared/Button';



function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  // Modal.jsx
  const { isShowing, toggle } = useModal();

  return (

    
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>

          <Button>
           <button className="button-default" onClick={toggle}>
            Developer Info
          </button>
          </Button>
          
          <Modal isShowing={isShowing} hide={toggle} />
          

    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
