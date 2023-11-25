import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  project: null,
  onAbout: false,
  onProject: false,
  onSkills: false,
  onContact: false,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
    setOnProject: (state, action) => {
      state.onProject = action.payload;
    },
    setOnAbout: (state, action) => {
      state.onAbout = action.payload;
    },
    setOnSkills: (state, action) => {
      state.onSkills = action.payload;
    },
    setOnContact: (state, action) => {
      state.onContact = action.payload;
    },
  },
  });

export const { setProject, setOnAbout, setOnContact, setOnProject, setOnSkills } = projectSlice.actions;
export default projectSlice.reducer;
