import app from  './src/app.js';
import connectDB from './src/db/db.js';

connectDB();



// Start the server on port 3000

app.listen(3000,()=>{
    console.log("Auth Service Running on Port 3000 🩵");
    
})