import express from 'express'
import { sendResarvation } from '../controllers/resarvation-controller.js'
const router = express.Router()



router.post('/send' , sendResarvation )
export default router