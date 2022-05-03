import CloseButton from "../../CloseButton";
import { FeedbackContentStepProps } from "../types";
import { feedbackTypes } from "../../../constants/feedback";
import { ArrowArcLeft, ArrowLeft } from "phosphor-react";

export default function FeedbackContent({
  feedbackType,
  onFeedbackRestartRequest,
}: FeedbackContentStepProps) {
  const { title, image } = feedbackTypes[feedbackType];

  return (
    <>
      <header className="flex">
        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img className="w-6 h-6" src={image.source} alt={image.alt} />
          {title}
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
