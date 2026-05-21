import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty.js";

// Route handler for the faculty list page
const facultyListPage = (req, res) => {
    const sortBy = req.query.sort;
    const faculty = getSortedFaculty(sortBy);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: faculty,
        currentSort: sortBy || 'name'
    });
}
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const faculty = getFacultyById(facultyId);

    // If faculty member doesn't exist, create 404 error
    if (!faculty) {
        const err = new Error(`Faculty member ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    // Handle sorting if requested
    const sortBy = req.query.sort;
    const sortedFaculties = getSortedFaculty(sortBy);

    //render (or display the page)
    res.render('faculty/detail',{
        title: faculty.name,
        office: faculty.office,
        currentSort: sortBy,
        faculty: faculty
    });
}

export {facultyListPage, facultyDetailPage}