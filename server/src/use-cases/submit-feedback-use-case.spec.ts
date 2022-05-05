import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

// mocks
const feedbackRepositoryMethodMock = { create: createFeedbackSpy };
const mailAdapterMethodMock = { sendMail: sendMailSpy };
const feedbackToSubmitMock = {
  type: "BUG",
  comment: "example comment",
  screenshot: "data:image/png;base64,iVBORw0KGgo",
};

const feedbackToSubmitWithoutTypeMock = {
  type: "",
  comment: "example comment",
  screenshot: "data:image/png;base64,iVBORw0KGgo",
};

const feedbackToSubmitWithoutCommentMock = {
  type: "BUG",
  comment: "",
  screenshot: "data:image/png;base64,iVBORw0KGgo",
};

const feedbackToSubmitWithInvalidFormatMock = {
  type: "BUG",
  comment: "example comment",
  screenshot: "teste.jpg",
};

const submitFeedback = new SubmitFeedbackUseCase(
  feedbackRepositoryMethodMock,
  mailAdapterMethodMock
);

// tests
describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedback.execute(feedbackToSubmitMock)
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute(feedbackToSubmitWithoutTypeMock)
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute(feedbackToSubmitWithoutCommentMock)
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute(feedbackToSubmitWithInvalidFormatMock)
    ).rejects.toThrow();
  });
});
