import PropTypes from 'prop-types'

// import Button from './shared/Button';
import Modal from "./Modal";
import useModal from "./useModal";


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

          {/* <Button> */}
           <button className="button-default" onClick={toggle}>
            Developer Info
          </button>
          <Modal className="modal-content" isShowing={isShowing} hide={toggle} />
          
          {/* </Button> */}
        
          

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
