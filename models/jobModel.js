import mongoose from 'mongoose'
import { Schema } from 'mongoose'

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
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: String
    }
}, {timestamps: true});

const Job = model('job', jobSchema);

export default Job
