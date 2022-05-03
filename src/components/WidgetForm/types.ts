import { feedbackTypes } from "../../constants/feedback";

export type FeedbackType = keyof typeof feedbackTypes;

export interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
}

export interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}
