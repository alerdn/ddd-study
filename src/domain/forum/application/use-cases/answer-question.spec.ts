import { InMemoryAnswersRepository } from "test/repositories/in-memory-answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

// SUT = System Under Test
let sut: AnswerQuestionUseCase;
let inMemoryRepository: InMemoryAnswersRepository;

describe("Answer Question Use Case", () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryRepository);
  });

  it("should be able to answer a question", async () => {
    const content = "Nova resposta";

    const { answer } = await sut.execute({
      instructorId: "1",
      questionId: "1",
      content,
    });

    expect(answer.id).toBeTruthy();
    expect(inMemoryRepository.items[0].id).toEqual(answer.id);
  });
});
