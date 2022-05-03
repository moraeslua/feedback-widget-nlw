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
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
      </form>
    </>
  );
}
