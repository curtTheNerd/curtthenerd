import { createContext, useContext } from "react";

export type VariantType = "minimal" | "bento" | "parallax" | "modern-minimal";

interface VariantContextType {
  variant: VariantType;
  setVariant: (v: VariantType) => void;
}

export const VariantContext = createContext<VariantContextType>({
  variant: "minimal",
  setVariant: () => {},
});

export const useVariant = () => useContext(VariantContext);
