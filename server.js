// Import express using ESM syntax
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'production';

// Create an instance of an Express application
const app = express();


const name = process.env.NAME;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views')); 


app.use(express.static(path.join(__dirname,'public')));

// Define a route handler for the root URL ('/')
app.get('/', (req, res) => {
    const title = 'Welcome home';
    res.render('home',{title});
});
app.get('/about',(req,res) =>{
    const title = 'About us';
    res.render('about',{title});
});
app.get('/products',(req,res) =>{
    const title = 'Our Products';
    res.render('products',{title});
});


// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});