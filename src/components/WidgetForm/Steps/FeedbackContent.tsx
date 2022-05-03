import CloseButton from "../../CloseButton";
import { FeedbackContentStepProps, ScreenshotButtonProps } from "../types";
import { feedbackTypes } from "../../../constants/feedback";
import { ArrowLeft } from "phosphor-react";
import ScreenshotButton from "../ScreenshotButton";
import { FormEvent, useState } from "react";

const minCharactersNumberForComment = 3;

export default function FeedbackContent({
  feedbackType,
  onFeedbackRestartRequest,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const { title, image } = feedbackTypes[feedbackType];

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault();
    console.log({ screenshot, comment });
    onFeedbackSent();
  };

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
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={({ target: { value } }) => setComment(value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.length < minCharactersNumberForComment}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
