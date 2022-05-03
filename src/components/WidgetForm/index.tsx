import { useState } from "react";
import FeedbackContent from "./Steps/FeedbackContent";
import FeedbackTypesStep from "./Steps/FeedbackTypes";
import { FeedbackType } from "./types";

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const restartFeedback = () => {
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypesStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContent
          feedbackType={feedbackType}
          onFeedbackRestartRequest={restartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          target="_blank"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
