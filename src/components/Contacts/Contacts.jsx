import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

// const keyGenerate = () => (
//     nanoid()
// )

export const Contacts =({constactsList}) => {
    return (
      <>
            {constactsList.map(contact =>
                (<li key = {nanoid()} >
                    {contact}
                </li>))}
      </>
    )
}

Contacts.propTypes = {
    constactsList: PropTypes.array.isRequired,
}