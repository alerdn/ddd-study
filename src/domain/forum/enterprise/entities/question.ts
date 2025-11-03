import { Slug } from "./value-objects/slug";
import { Entity } from "@/core/entities/entities";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";
import dayjs from "dayjs";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  static create(props: Optional<QuestionProps, "createdAt" | "slug">, id?: UniqueEntityID) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id,
    );

    return question;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  get title() {
    return this.props.title;
  }

  set title(value: string) {
    this.props.title = value;
    this.props.slug = Slug.createFromText(value);

    this.touch();
  }

  get content() {
    return this.props.content;
  }

  set content(value: string) {
    this.props.content = value;
    this.touch();
  }

  get slug() {
    return this.props.slug;
  }

  get authorId() {
    return this.props.authorId;
  }

  get bestAnswerId() {
    return this.props.bestAnswerId;
  }

  set bestAnswerId(value: UniqueEntityID | undefined) {
    this.props.bestAnswerId = value;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get isNew() {
    return dayjs().diff(this.props.createdAt, "days") <= 3;
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }
}
