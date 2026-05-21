import { Router } from 'express';


// Create a new router instance
const router = Router();

// TODO: Add import statements for controllers and middleware
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';

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

export default router;