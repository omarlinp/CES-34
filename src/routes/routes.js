import { Router } from 'express';


// Create a new router instance
const router = Router();

// Add catalog-specific styles to all catalog routes
router.use('/', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/main.css">');
    next();
});
router.use('/catalog', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/catalog.css">');
    next();
});
router.use('/faculty', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/faculty.css">');
    next();
});

// Add contact-specific styles to all contact routes
router.use('/contact', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/contact.css">');
    next();
});

// TODO: Add import statements for controllers and middleware
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from '../controllers/catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from '../controllers/index.js';
import {facultyListPage, facultyDetailPage} from '../controllers/faculty/faculty.js';

import contactRouter from '../controllers/forms/contact.js';

// TODO: Add route definitions
router.get('/', homePage);
router.get('/about', aboutPage);
// Course catalog and course detail routes
router.get('/catalog', catalogPage);
router.get('/catalog/:slugId', courseDetailPage);
// Demo page with custom headers
router.get('/demo', addDemoHeaders, demoPage);
// Route to trigger a test error for error handling demonstration
router.get('/test-error', testErrorPage);

//Route to the facility and facility details
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultySlug', facultyDetailPage);

// Contact form routes
router.use('/contact', contactRouter);

export default router;