import { CreateQuestionUseCase } from "./create-question";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { Question } from "../../enterprise/entities/question";
import { Slug } from "../../enterprise/entities/value-objects/slug";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

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
    const newQuestion = Question.create({
      title: "Example Question",
      slug: Slug.create(slugText),
      content: "This is an example question content.",
      authorId: new UniqueEntityID(),
    });
    await inMemoryRepository.create(newQuestion);

    const { question } = await sut.execute({
      slug: slugText,
    });

    expect(question.id).toBeTruthy();
    expect(question.title).toEqual(newQuestion.title);
  });
});
