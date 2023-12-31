import { useNavigate } from "react-router-dom";
const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="block py-6 opacity-50 hover:opacity-25 md:mb-3 md:mt-5 lg:mb-6 lg:mt-8"
      onClick={() => navigate(-1)}
      aria-label="go back"
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
