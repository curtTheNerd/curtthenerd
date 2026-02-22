import "./index.css";
import "./fonts.css";
import { useState } from "react";
import { VariantContext, VariantType } from "./components/Core/VariantContext";
import AppRouter from "./components/Core/AppRouter";

const App = () => {
  const [variant, setVariant] = useState<VariantType>("minimal");

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      <div className="relative w-screen h-full min-w-[300px] min-h-screen">
        <AppRouter />
      </div>
    </VariantContext.Provider>
  );
};

export default App;
