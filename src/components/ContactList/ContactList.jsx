import PropTypes from 'prop-types';
// import css from './ContactList.module.css'

export const ContactList =({constactsList}) => {
    return (
      <ul>
        {constactsList.map(contact =>
            (<li key = {contact.id} >
                {contact.name}: {contact.number}
            </li>))}
      </ul>
    )
}

ContactList.propTypes = {
    constactsList: PropTypes.array.isRequired,
}