import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { makeQuestion } from "test/factories/make-question";
import { Slug } from "../../enterprise/entities/value-objects/slug";

// SUT = System Under Test
let sut: GetQuestionBySlugUseCase;
let inMemoryRepository: InMemoryQuestionsRepository;

describe("Get Question By Slug Use Case", () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryRepository);
  });

  it("should be able to get a question by slug", async () => {
    const slugText = "example-question";
    const newQuestion = makeQuestion({ slug: Slug.create(slugText) });
    await inMemoryRepository.create(newQuestion);

    console.log(newQuestion);

    const { question } = await sut.execute({
      slug: slugText,
    });

    expect(question.id).toBeTruthy();
    expect(question.title).toEqual(newQuestion.title);
  });
});
