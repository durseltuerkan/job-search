import express from 'express'
import addJob from '../components/addJob.js'

const Router = express.Router();

Router.post('/addJob', addJob)
console.log("Router gestartet");


export default Router;
