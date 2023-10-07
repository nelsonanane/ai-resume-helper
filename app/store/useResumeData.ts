import { create } from "zustand";
import { ExperienceModel } from "../models/ExperienceModel";
import { EducationModel } from "../models/EducationModel";

export const useResumeData = create((set) => ({
  contact: {
    firstName: "",
    lastName: "",
    profession: "",
    phone: "",
    email: "",
    location: "",
    website: "",
  },
  summary: "",
  experiences: [
    new ExperienceModel({
      duration: "",
      title: "",
      company: "",
      location: "",
      description: "",
    }),
  ],
  skills: [],
  image: null,
  colleges: [
    new EducationModel({
      duration: "",
      degree: "",
      major: "",
      name: "",
      location: "",
    }),
  ],
  setContact: (value: number, key: string) =>
    set((state: any) => ({
      ...state,
      contact: { ...state.contact, [key]: value },
    })),
  setSummary: (summary: string) => set((state: any) => ({ summary })),
  addExperience: () =>
    set((state: any) => ({
      ...state,
      ...state.experiences.push(
        new ExperienceModel({
          duration: "",
          title: "",
          company: "",
          location: "",
          description: "",
        })
      ),
    })),
  removeExperience: (id: any) =>
    set((state: any) => ({
      ...state,
      experiences: state.experiences.filter(
        (experience: any) => experience.id !== id
      ),
    })),
  addEducation: () =>
    set((state: any) => ({
      ...state,
      ...state.colleges.push(
        new EducationModel({
          duration: "",
          degree: "",
          major: "",
          name: "",
          location: "",
        })
      ),
    })),
  removeEducation: (id: any) =>
    set((state: any) => ({
      ...state,
      colleges: state.colleges.filter((col: any) => col.id !== id),
    })),
  addSkill: () =>
    set((state: any) => ({
      ...state,
      ...state.skills.push(""),
    })),
  removeSkill: (index: any) =>
    set((state: any) => ({
        ...state,
        ...state.skills.splice(index, 1)
    })),
  setImage: (image: any) => set((state: any) => ({ image })),
}));
