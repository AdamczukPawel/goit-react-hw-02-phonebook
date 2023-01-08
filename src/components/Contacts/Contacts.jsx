import PropTypes from 'prop-types';

// const keyGenerate = () => (
//     nanoid()
// )

export const Contacts =({constactsList}) => {
    return (
      <>
            {constactsList.map(contact =>
                (<li key = {contact.id} >
                    {contact.name}: {contact.number}
                </li>))}
      </>
    )
}

Contacts.propTypes = {
    constactsList: PropTypes.array.isRequired,
}