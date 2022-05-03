import CloseButton from "./CloseButton";
import { feedbackTypesEntries } from "../constants/feedback-types";

export default function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <p>Widget Form</p>
      <div className="flex py-8 gap-2 w-full">
        {feedbackTypesEntries.map(([_key, { title, image }]) => (
          <button>
            <img src={image.source} alt={image.alt} />
            <span>{title}</span>
          </button>
        ))}
      </div>
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
