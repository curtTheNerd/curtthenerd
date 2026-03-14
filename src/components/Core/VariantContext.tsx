import { createContext, useContext } from "react";

export type VariantType =
  | "Minimal"
  | "Parallax"
  | "Modern"
  | "Bento"
  | "Playful";

interface VariantContextType {
  variant: VariantType;
  setVariant: (v: VariantType) => void;
}

export const VariantContext = createContext<VariantContextType>({
  variant: "Minimal",
  setVariant: () => {},
});

export const useVariant = () => useContext(VariantContext);
