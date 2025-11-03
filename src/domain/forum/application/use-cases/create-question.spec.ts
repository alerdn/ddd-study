import { QuestionsRepository } from "../repositories/questions-repository";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionRepository: QuestionsRepository = {
  create: async () => {},
};

test("create question use case", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);
  const content = "Nova pergunta";

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Título da pergunta",
    content,
  });

  expect(question.id).toBeTruthy();
});
