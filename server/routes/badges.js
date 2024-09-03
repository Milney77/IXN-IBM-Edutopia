const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Route to get the list of badge images
router.get('/badges', (req, res) => {
    const badgesDir = path.join(__dirname, '../../client/public/images/badges');
    fs.readdir(badgesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }
        const images = files.filter(file => /\.(png|jpg|jpeg)$/.test(file)); 
        res.json(images);
    });
});

module.exports = router;