const Student = require('../models/student.js')

const hermione = new Student({
    firstName: 'Hermione',
    lastName: 'Granger',
    birthday: new Date('Sept 19 1973'),
    house: 'Gryffindor',
    friends: ['Ron', 'Harry']
})

const harry = new Student({
    firstName: 'Harry',
    lastName: 'Potter',
    birthday: new Date('July 31 1980'),
    house: 'Gryffindor',
    friends: ['Hermione', 'ron']
})

const ron = new Student({
    firstName: 'Harry',
    lastName: 'Weasley',
    birthday: new Date('March 1 1980'),
    house: 'Gryffindor',
    friends: ['Hermione', 'Harry']
})

module.exports = async () => {
    try {
        await Student.remove({})
        await hermione.save()
        await harry.save()
        await ron.save()
        // console.log(doc)
    } catch (e) {
        console.log(e)
    }
}