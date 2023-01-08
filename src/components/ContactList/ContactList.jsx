import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList =({ constactsList, deleteContact}) => {
    return (
      <ul className={css.list}>
        {constactsList.map(contact =>
            (<li key = {contact.id} className={css.element}>
            {contact.name}: {contact.number}
            <button className={css.button} type="button" onClick={()=>deleteContact(contact.id)}>Delete</button>
            </li>))}
      </ul>
    )
}

ContactList.propTypes = {
    constactsList: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}