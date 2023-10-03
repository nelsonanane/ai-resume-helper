import { create } from "zustand";

export const useConfiguration = create((set) => ({
  color: "#0773e8",
  font: "Poppins",
  fontSize: "16px",
  setColor: (color: string) => set((state: any) => ({ color })),
  setFont: (font: string) => set((state: any) => ({ font })),
  setFontSize: (size: string) => set({ fontSize: size }),
}));
