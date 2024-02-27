// Adding values to object dynamically syntax

const propertyfirst = 'firstName'
const propertyLast = 'lastName'

const fn = 'shubhat'
const ln = 'rashid'

const user = {
    [propertyfirst]:fn,
    [propertyLast]:ln
}

console.log(user)

// deleting a property syntax
delete user.firstName
console.log(user)