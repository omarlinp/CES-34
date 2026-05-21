import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty";

const facultyListPage = (req, res) => {
    const sortBy = req.query.sortBy || 'name';
    const faculty = getSortedFaculty(sortBy);
    res.render('faculty/list', { title: 'Faculty List', faculty });
}