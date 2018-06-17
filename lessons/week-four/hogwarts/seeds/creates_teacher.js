const Teacher = require('../models/teacher.js')

//Minerva McGonagall
const minerva = new Teacher({
    firstName: 'Minerva',
    lastName: 'McGonagall',
    house: 'Gryffindor'
})

const severus = new Teacher({
    firstName: 'Severus',
    lastName: 'Snape',
    house: 'Slytherin'
})

module.exports = async () => {
    try {
        await Teacher.remove({})
        await minerva.save()
        await severus.save()
    } catch (e) {
        conosle.log(e)
    }
}