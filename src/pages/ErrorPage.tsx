import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateToHomePage = () => navigate(`/`);
  return (
    <div className="min-h-screen h-0 w-screen bg-palm-dark-green">
      <div className="flex flex-col items-center gap-6 justify-center text-palm-white h-full">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl lg:text-5xl font-black">Oops! 404,</h1>
          <h2 className="text-xl lg:text-3xl font-bold">An error has occurred</h2>
        </div>

        <button
          className="rounded-xl px-6 py-4 bg-palm-white text-palm-dark-green min-w-fit hover:bg-palm-purple hover:text-palm-white transition-all ease-linear duration-300"
          onClick={navigateToHomePage}
        >
          Back to Home page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
