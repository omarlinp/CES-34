import { Router } from 'express';


// Create a new router instance
const router = Router();

// TODO: Add import statements for controllers and middleware
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';
import {facultyListPage, facultyDetailPage} from './faculty/faculty.js'

// TODO: Add route definitions
router.get('/', homePage);
router.get('/about', aboutPage);
// Course catalog and course detail routes
router.get('/catalog', catalogPage);
router.get('/courses/:courseId', courseDetailPage);
// Demo page with custom headers
router.get('/demo', addDemoHeaders, demoPage);
// Route to trigger a test error for error handling demonstration
router.get('/test-error', testErrorPage);

//Route to the facility and facility details
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultyId', facultyDetailPage);

export default router;