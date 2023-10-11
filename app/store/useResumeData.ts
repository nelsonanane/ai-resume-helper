import { create } from "zustand";
import { ExperienceModel } from "../models/ExperienceModel";
import { EducationModel } from "../models/EducationModel";
import { DescriptionItem } from "../models/DescriptionItem";

const defaultDescriptionItems = [
  new DescriptionItem({
    value: "",
    placeholder: "Enter your work experience description here.",
  }),
  new DescriptionItem({
    value: "",
    placeholder: "Provide details that showcase how you added value.",
  }),
  new DescriptionItem({
    value: "",
    placeholder:
      "Focus on responsibilities that are relevant to the job you are applying for.",
  }),
  new DescriptionItem({
    value: "",
    placeholder:
      "If you need help writing your work experience description, you can use the AI Writing Assistant.",
  }),
];

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
      description: defaultDescriptionItems,
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
  suggestions: {},
  setSuggestions: (suggestions: number) => set((state: any) => ({suggestions})),
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
          description: [
            new DescriptionItem({
              value: "",
              placeholder: "Enter your work experience description here.",
            }),
            new DescriptionItem({
              value: "",
              placeholder: "Provide details that showcase how you added value.",
            }),
            new DescriptionItem({
              value: "",
              placeholder:
                "Focus on responsibilities that are relevant to the job you are applying for.",
            }),
            new DescriptionItem({
              value: "",
              placeholder:
                "If you need help writing your work experience description, you can use the AI Writing Assistant.",
            }),
          ],
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
      ...state.skills.splice(index, 1),
    })),
  setImage: (image: any) => set((state: any) => ({ image })),
  addParagraph: (experienceIndex: number) =>
    set((state: any) => ({
      ...state,
      ...state.experiences[experienceIndex]?.description.push(
        new DescriptionItem({
          value: "",
          placeholder: "Enter your work experience description here.",
        })
      ),
    })),
  removeParagraph: (experienceIndex: number, descriptionIndex: number) =>
    set((state: any) => ({
      ...state.experiences,
      ...state.experiences[experienceIndex]?.description.splice(
        descriptionIndex,
        1
      ),
    })),
}));
