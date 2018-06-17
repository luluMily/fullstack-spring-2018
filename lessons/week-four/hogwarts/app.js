const mongoose = require('mongoose')
const createStudent = require('./seeds/creates_student')
const createTeacher = require('./seeds/creates_teacher')

const uri = 'mongodb://localhost:27017/hogwarts'

mongoose
    .connect(uri)
    .then(() => {
        console.log(`Successfully connected to ${uri}`)
        createStudent()
        createTeacher()
    })
    .catch( (err) => {
        console.log(err)
    })