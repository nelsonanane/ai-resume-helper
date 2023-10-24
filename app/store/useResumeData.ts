import { create } from "zustand";
import { ExperienceModel } from "../models/ExperienceModel";
import { EducationModel } from "../models/EducationModel";
import { DescriptionItem } from "../models/DescriptionItem";
import { ResumeModel } from "../models/ResumeModel";

export const useResumeData = create((set) => ({
  ...new ResumeModel(),
  setSuggestions: (suggestions: number) =>
    set((state: any) => ({ suggestions })),
  setContact: (value: number, key: string) =>
    set((state: any) => {
      console.log('this.state.setContact', state.contact.updateContact(key, value));
      console.log('state', state)
      return {
        ...state,
        ...state.contact.updateContact(key, value)
      }
    }),
  setSummary: (summary: string) => set((state: any) => ({ summary })),
  addExperience: () =>
    set((state: any) => ({
      ...state,
      ...state.experiences.push(new ExperienceModel()),
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
        new EducationModel()
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
        new DescriptionItem()
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
  setExperienceDescription: (
    experienceIndx: number,
    descIndx: number,
    data: { innerHTML: any }
  ) =>
    set((state: any) => {
      const { innerHTML } = data;
      const updatedData = [...state?.experiences];
      updatedData[experienceIndx].description[descIndx].value = innerHTML;
      return {
        ...state,
        experiences: updatedData,
      };
    }),
  setEducation: (
    index: number,
    event: React.FocusEvent<HTMLParagraphElement>
  ) =>
    set((state: any) => {
      const { innerHTML } = event.target;
      const fieldName = event?.target?.getAttribute("data-name") as string;
      const updatedColleges = [...state?.colleges];
      updatedColleges[index][fieldName] = innerHTML;
       
      return {
        ...state,
        colleges: updatedColleges,
      };
    }),
}));
