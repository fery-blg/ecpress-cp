const express = require('express');
const path = require('path');
const x=require('./middleware');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');


// Define a route that renders a template
app.get('/blog-post',x, (req, res) => {
    try {
    const templateData = {
        title: 'Introduction to Template Engines',
        date: '2024-01-26',
        content: 'Template engines help separate content from structure in web development...',
        author: 'John Doe'
    };

    // Render the 'blog-post.ejs' template with the provided data
    res.render('blog-post', templateData);
}catch(e){


    res.render('error')
}
});
app.get('/contact',x, (req, res) => {
    try {
    const templateData = {
        title: 'Introduction to Template Engines',
        date: '2024-01-26',
        content: 'Template engines help separate content from structure in web development...',
        author: 'John Doe'
    };

    // Render the 'blog-post.ejs' template with the provided data
    res.render('contact', templateData);
}catch(e){


    res.render('error')
}
});
app.get('/home',x, (req, res) => {
    try {
    const templateData = {
        title: 'Introduction to Template Engines',
        date: '2024-01-26',
        content: 'Template engines help separate content from structure in web development...',
        author: 'John Doe'
    };

    // Render the 'blog-post.ejs' template with the provided data
    res.render('home', templateData);
}catch(e){


    res.render('error', )

}
});
app.get('/service',x, (req, res) => {
    try {
    const templateData = {
        title: 'Introduction to Template Engines',
        date: '2024-01-26',
        content: 'Template engines help separate content from structure in web development...',
        author: 'John Doe'
    };

    // Render the 'blog-post.ejs' template with the provided data
    res.render('service', templateData);
}catch(e){


    res.render('error')
}
});







app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${3000}`);
});
