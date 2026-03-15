import "./index.css";
import { useState } from "react";
import { VariantContext, VariantType } from "./components/Core/VariantContext";
import AppRouter from "./components/Core/AppRouter";

const App = () => {
  const [variant, setVariant] = useState<VariantType>("Minimal");

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>
      <div className="w-screen h-full min-w-[300px] min-h-screen">
        <AppRouter />
      </div>
    </VariantContext.Provider>
  );
};

export default App;
