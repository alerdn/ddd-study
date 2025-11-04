import { CreateQuestionUseCase } from "./create-question";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";

// SUT = System Under Test
let sut: CreateQuestionUseCase;
let inMemoryRepository: InMemoryQuestionsRepository;

describe("Create Question Use Case", () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryRepository);
  });

  it("should be able to create a question", async () => {
    const content = "Nova pergunta";

    const { question } = await sut.execute({
      authorId: "1",
      title: "Título da pergunta",
      content,
    });

    expect(question.id).toBeTruthy();
    expect(inMemoryRepository.items[0].id).toEqual(question.id);
  });
});
