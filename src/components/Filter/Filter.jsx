import PropTypes from 'prop-types'
// import css from './Form.module.css'

export const Filter = ({handleInputChange, value}) => {
    return (
    <>
        <p>Find contact by name</p>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
        />
    </>
    )
}

Filter.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}
