import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import app from "./app.js";
import cloudinary from 'cloudinary';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET,
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    
    app.get('*', (req, res, next) => {
        if (req.url.startsWith('/api/')) {
            return next();
        }
        res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
    });
}

// Add error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});