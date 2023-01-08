import PropTypes from 'prop-types';
// import css from './ContactForm.module.css'

export const ContactForm = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
                type="text"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                name="name"
                required
            />
            <p>Number</p>
            <input
                type="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                name="number"
                required
            />
            <button type="submit">Add contact</button>
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}
