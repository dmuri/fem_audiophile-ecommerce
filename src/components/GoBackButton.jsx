import { useNavigate } from "react-router-dom";
const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="opacity-50 py-3 md:mb-3 md:mt-5 lg:mt-8 lg:mb-6"
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
