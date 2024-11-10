const path = require('path'); // Add this line
const multer = require('multer');
require('dotenv').config();
const express = require('express');              // 1. Importing Express
const app = express();
const bodyParser = require('body-parser');       // 2. Importing body-parser to parse incoming request bodies
const sequelize = require('./config/database');           // 3. Importing Sequelize config for database connection
   // 4. Importing the books routes
const bookRoutes = require('./Routes/Books'); 
const userRoutes = require('./Routes/users');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(fileUpload()); // Use the file upload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Define the PORT variable
const PORT =  3007; // Default to 3000 if not defined

// Other routes for your API

app.use('/books', require('./Routes/Books'));

app.use('/users', userRoutes);



// Set EJS as the view engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '../Frontend/Views'));

// Serve static files (like CSS, images, etc.)
app.use(express.static(path.join(__dirname, '../Frontend/public')));


// Middleware
app.use(bodyParser.json());                      // 8. Middleware to parse JSON request bodies
app.use(express.static('../public')); // Serve static files from the public directory
app.use('/', bookRoutes);               // 9. Defining the endpoint for books-related routes


// Sync models with the database and start the server
sequelize.sync({ alter: true }) // Use alter to update existing tables
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });

  