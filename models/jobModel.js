import { Schema, model } from 'mongoose'

const jobSchema = new Schema ({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Job = model('job', jobSchema);

export default Job
