import ColorShaderApp from "./ColorShader/ColorshaderApp";
import BackgroundApp from "./BackgroundApp/Background";

const DesignApps = () => {
  return (
    <div className="modal-page flex-col overflow-hidden">
      <div className="modal-container mt-[15vh] bg-[rgba(0,0,0,0.1)]">
        <ColorShaderApp />
      </div>

      <div className="relative w-full min-h-screen overflow-hidden">
        <BackgroundApp className="" />
      </div>
    </div>
  );
};

export default DesignApps;
