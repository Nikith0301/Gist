const express= require('express')


const {createNote,getNotes,getNote}=require('../controllers/NotesController.cjs')


const router = express.Router()


const requireAuth=require('../middleware/requireAuth.cjs')

router.use(requireAuth)
router.get('/:id',getNote)
router.get('/',getNotes)//dont keep /notes here => If you are using app.use('/notes', notesRoute); in your main server file, then the routes in the router should not include /notes because it will be appended automatically.

router.post('/',createNote)


module.exports = router