import { useCallback, useState } from "react";
import useMoods from "../hooks/useMoods";
import Loader from "../components/Loader";
import PurpleButton from "../components/PurpleButton";
import toast, { Toaster } from "react-hot-toast";
import type { Exercise } from "../schema";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  const { isLoading, moods } = useMoods();
  const [mood, setMood] = useState<string>("");
  const [energy, setEnergy] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [showSubmission, setShowSubmission] = useState<boolean>(false);
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [suggestion, setSuggestion] = useState<string>("");
  const [isSubmissionDone, setIsSubmissionDone] = useState<boolean>(false);

  const closeModal = () => {
    setShowSubmission(false);
  };

  const handleSubmit = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_PLASMA_API}/mood/suggestion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood: mood,
          energy: energy,
          notes: notes,
        }),
      });
      if (!response.ok) {
        throw new Error(
          `there was an error fetching your exercise, error: ${response.status}, ${response.statusText}`
        );
      }
      const { suggestions } = await response.json();
      setShowSubmission(true);
      setExercise(suggestions.exercise);
      setSuggestion(suggestions.suggestion);
      setIsSubmissionDone(true);
      setEnergy("");
      setMood("");
      setNotes("");
    } catch (error) {
      console.log(error);
      toast.error("An error has occur while submitting your data");
      setShowSubmission(false);
    }
  }, [energy, mood, notes]);

  return (
    <>
      <Helmet>
        <title>Palm Outsourcing task home page</title>
      </Helmet>
      <div className="flex flex-col gap-15 h-full w-full flex-1">
        <section className="lg:px-15 grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8">
          <div className="flex flex-col col-span-full lg:col-span-6 gap-5 justify-center px-6 lg:px-0">
            <h1 className="font-medium text-xl lg:text-5xl text-palm-dark-green">Welcome back!</h1>
            <p className="text-palm-green">
              We all have days when our feelings feel a little too heavy or hard to explain — and
              that’s totally okay. Share with us how you’re feeling, and we’ll offer gentle, helpful
              exercises to support your mood — whether it’s calming your mind, lifting your spirits,
              or just finding a moment of peace. You’re not alone, and you don’t have to figure it
              all out by yourself. We’re here for you, one step at a time.
            </p>
          </div>
          <div className="col-span-full lg:col-span-5 lg:col-start-8">
            <img src="/HeroImg.png" alt="Hero Image" width={531} height={501} className="w-full" />
          </div>
        </section>

        <section className="w-full bg-palm-dark-green p-6 lg:p-15 ">
          <div className=" grid grid-cols-4 lg:grid-cols-12 gap-4 max-w-full ">
            <div className="flex flex-col col-span-6 gap-5 text-white">
              <h1 className="font-medium text-2xl lg:text-4xl">How are you feeling today?</h1>
              <p>
                Sometimes it's easier to show how we feel than to put it into words. Tap the emoji
                that matches your mood. This quick check-in helps us understand where you’re at
                emotionally so we can offer the right exercises or tips to support you. No judgment
                here — just a safe space to feel, reflect, and recharge.
              </p>
            </div>
            <div className="col-span-6  flex items-center justify-center max-w-full">
              {isLoading ? (
                <div className="flex items-center justify-center w-full">
                  <Loader />
                </div>
              ) : (
                <div className="flex items-center justify-between w-full">
                  {moods &&
                    moods.map(({ name, id, imgSrc }) => {
                      return (
                        <button
                          key={`${name}+${id}`}
                          className="flex flex-col items-center justify-center gap-6 cursor-pointer"
                          onClick={() => {
                            setMood(id);
                          }}
                        >
                          <img src={imgSrc} alt={`${name} Mood Icon`} width={60} height={60} />
                          <p
                            className={`${
                              mood === id ? "text-palm-purple" : "text-white"
                            } capitalize`}
                          >
                            {name}
                          </p>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="p-6 lg:px-15 grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8">
          <div className="flex flex-col col-span-full lg:col-span-6 gap-5 text-palm-green">
            <h1 className="font-medium text-2xl lg:text-4xl">How’s your energy right now?</h1>
            <p>
              Take a moment to check in with your body and mind. On a scale from 1 to 10 — with 1
              being completely drained and 10 being full of energy — where do you land right now?
              There's no right or wrong answer here. Knowing your energy level can help us guide you
              toward the right kind of support — whether you need a quick boost, some rest, or just
              a little encouragement to get through the day. Wherever you are, we’ve got something
              to help you feel a little more balanced.
            </p>
          </div>
          <div className="flex items-center justify-between w-full col-span-4 lg:col-span-6 relative">
            <span className="absolute rounded-full block h-1 w-full bg-palm-dark-green -z-10" />
            {Array.from({ length: 11 }).map((_, index) => {
              return (
                <button
                  key={`Energy ${index}`}
                  className={`flex items-center justify-center gap-6 cursor-pointer rounded-full w-4 h-2.5 lg:w-6 lg:h-6 p-3 bg-palm-dark-green 
                  ${energy === `${index}` ? "scale-110" : "scale-none"}
                  `}
                  onClick={() => {
                    setEnergy(`${index}`);
                  }}
                >
                  <div
                    className={`py-1 px-2 flex items-center rounded-full text-white ${
                      energy === `${index}` ? "bg-palm-grey" : "bg-transparent"
                    }`}
                  >
                    <p className=" w-4">{index}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="relative p-4 lg:p-15 w-full bg-palm-grey grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8">
          <div className="col-span-full lg:col-start-3 lg:col-span-8 flex flex-col gap-5 text-center lg:pb-15">
            <h1 className="font-medium text-2xl lg:text-4xl">What’s on Your Mind?</h1>
            <p>
              Sometimes, just putting your thoughts into words can bring a sense of relief. Take a
              moment to share how you’re feeling — whether it’s a bit of frustration, excitement, or
              something you just can’t quite put your finger on. This space is all about you — no
              filters, no pressure. Whether you want to vent, reflect, or simply express yourself,
              we’re here to listen and guide you toward what you need.
            </p>
          </div>
          <div className="p-4 lg:p-15 flex flex-col gap-6 items-center justify-center bg-palm-white rounded-xl top-[80%] col-span-full lg:col-start-3 lg:col-span-8 w-full mb-6 lg:mb-15 ">
            <div className="relative flex w-full">
              <label
                htmlFor="notes-ta"
                className="absolute -top-2 lg:-top-3 left-2 lg:left-4 bg-palm-white text-sm lg:text-base"
              >
                Tell us more about what’s on your mind
              </label>
              <textarea
                rows={7}
                name="notes"
                id="notes-ta"
                value={notes}
                onChange={(event) => {
                  setNotes(event.currentTarget.value);
                }}
                className="w-full border-[1px] border-black rounded-xl py-8 px-6"
              ></textarea>
            </div>
            <PurpleButton onClick={handleSubmit}>Get your Exercise</PurpleButton>
          </div>
        </section>
        <Modal
          classNames={{
            modal: "rounded-xl p-4",
          }}
          open={showSubmission}
          onClose={closeModal}
          center
        >
          {showSubmission &&
            (isSubmissionDone ? (
              <section className="lg:px-15 grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="flex flex-col col-span-full lg:col-span-6 gap-5 justify-center px-6 lg:px-0">
                  <h1 className="font-medium text-xl lg:text-5xl text-palm-dark-green">
                    {exercise?.name}
                  </h1>
                  <p className="text-palm-green">
                    {exercise?.description}, {suggestion}
                  </p>
                </div>
                <div className="col-span-full lg:col-span-5 lg:col-start-8">
                  <img
                    src={exercise?.imgSrc}
                    alt={`An image of ${exercise?.name} exercise`}
                    width={531}
                    height={501}
                    className="w-full"
                  />
                </div>
              </section>
            ) : (
              <Loader />
            ))}
        </Modal>
        <Toaster />
      </div>
    </>
  );
};

export default LandingPage;
