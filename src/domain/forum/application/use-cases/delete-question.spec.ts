import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { makeQuestion } from "test/factories/make-question";
import { Slug } from "../../enterprise/entities/value-objects/slug";
import { DeleteQuestionUseCase } from "./delete-question";

// SUT = System Under Test
let sut: DeleteQuestionUseCase;
let inMemoryRepository: InMemoryQuestionsRepository;

describe("Delete Question", () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryQuestionsRepository();
    sut = new DeleteQuestionUseCase(inMemoryRepository);
  });

  it("should be able to delete a question by id", async () => {
    const newQuestion = makeQuestion();
    await inMemoryRepository.create(newQuestion);

    await sut.execute({ questionId: newQuestion.id.toString() });

    const deletedQuestion = await inMemoryRepository.findById(newQuestion.id.toString());
    expect(deletedQuestion).toBeNull();
  });
});
