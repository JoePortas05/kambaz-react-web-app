import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";
const initialState = {
courses: db.courses,
};
const coursesSlice = createSlice({
name: "courses",
initialState,
reducers: {
addCourse: (state, { payload: course }) => {
const newCourse: any = {
    _id: course._id,
    name: course.name,
    number: course.number,
    startDate: course.startDate,
    endDate: course.endDate,
    department: course.department,
    credits: course.credits,
    description: course.description
};
state.courses = [...state.courses, newCourse] as any;
},
deleteCourse: (state, { payload: assignmentId }) => {
state.courses = state.courses.filter(
(m: any) => m._id !== assignmentId);
},
updateCourse: (state, { payload: assignment }) => {
state.courses = state.courses.map((m: any) =>
m._id === assignment._id ? assignment : m
) as any;
},
},
});
export const { addCourse, deleteCourse, updateCourse } =
coursesSlice.actions;
export default coursesSlice.reducer;
