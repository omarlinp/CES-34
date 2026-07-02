import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

// Route handler for the faculty list page
const facultyListPage = async (req, res) => {
    const validSortOptions = ['name', 'department', 'title'];
    const sortBy = validSortOptions.includes(req.query.sort) ? req.query.sort : 'department';
    const faculty = await getSortedFaculty(sortBy);
    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: faculty,
        currentSort: sortBy
        
    });
};
const facultyDetailPage = async (req, res, next) => {
    const facultySlug = req.params.facultySlug;
    const faculty = await getFacultyBySlug(facultySlug);
    
    // If faculty member doesn't exist, create 404 error
    if (Object.keys(faculty).length === 0) {
        const err = new Error(`Faculty member ${facultySlug} not found`);
        err.status = 404;
        return next(err);
    }
    //render (or display the page)
    res.render('faculty/detail',{
        title: faculty.name,
        office: faculty.office,
        faculty: faculty
    }
    

);
}   

export {facultyListPage, facultyDetailPage}