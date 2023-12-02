import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  project: null,
  onAbout: false,
  onProject: false,
  onSkills: false,
  onContact: false,
  theme: localStorage.getItem('theme') || 'light',
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
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setProject,
  setOnAbout,
  setOnContact,
  setOnProject,
  setOnSkills,
  setTheme,
} = projectSlice.actions;
export default projectSlice.reducer;
