const express = require('express');
const router = express.Router();
const Model = require('../models/models')

router.get('/getAll',(res,req) =>{
    console.log('API is working');
    
})
router.post('/post', async (req, res) => {
    const values = new Model({
        name: req.body.name
    });
    try {
        const result = await values.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;