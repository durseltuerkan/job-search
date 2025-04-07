import Job from '../models/jobModel.js'

const addJob = async (req, res) => {
    const {title, description, city, location, salary} = req.body;
    if(!title || !description || !city || !location || !salary) {
      return res.status(401).json({success: false, message: "All fields are required"})
    }
    try {
        const newJob = await Job.create({title, description, city, location, salary});
        res.json(newJob)
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    return res.status(201).json({ message: 'new job created'})
    
     
}

export default addJob