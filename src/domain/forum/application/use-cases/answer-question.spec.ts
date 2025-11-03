import { AnswerRepository } from "../repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswerRepository: AnswerRepository = {
  create: async () => {},
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
