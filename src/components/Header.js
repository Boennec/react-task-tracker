import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='hello' />
            <Button color='blue' text='hello1' />
            <Button color='red' text='hello2' />
            <Button color='purple' text='hello3' />

        </header>
        
    )
}


Header.defaultProps = {
    title: 'Task Tracker',
  }
  


Header.propTypes = {
    title: PropTypes.string.isRequired

}

/*css in js
 const headingStyle = {
    color: 'red',
    backgroundColor:'black'
} */



export default Header
