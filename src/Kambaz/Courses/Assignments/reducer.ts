import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
assignments: db.assignments,
};
const assignmentsSlice = createSlice({
name: "assignments",
initialState,
reducers: {
addAssignment: (state, { payload: assignment }) => {
const newAssignment: any = {
  _id: uuidv4(),
  title: assignment.title,
  course: assignment.course,
  modules: assignment.modules,
  available: assignment.available,
  due: assignment.due,
  points: assignment.points,
  description: assignment.description
};
state.assignments = [...state.assignments, newAssignment] as any;
},
deleteAssignment: (state, { payload: assignmentId }) => {
state.assignments = state.assignments.filter(
(m: any) => m._id !== assignmentId);
},
updateAssignment: (state, { payload: assignment }) => {
state.assignments = state.assignments.map((m: any) =>
m._id === assignment._id ? assignment : m
) as any;
},
},
});
export const { addAssignment, deleteAssignment, updateAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;
