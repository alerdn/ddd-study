import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepository } from "@/domain/repositories/answers-repository";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer) => {
    return;
  },
};

test("answer question use case", () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);
  const content = "Nova resposta";

  const answer = answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content,
  });

  expect(answer.content).toBe(content);
});
