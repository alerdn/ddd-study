import { Entity } from "@/core/entities/entities";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";

interface NotificationProps {
  recipientId: UniqueEntityID;
  title: string;
  content: string;
  createAt: Date;
  readAt?: Date;
}

export class Notification extends Entity<NotificationProps> {
  static create(props: Optional<NotificationProps, "createAt">, id?: UniqueEntityID) {
    const notification = new Notification(
      {
        ...props,
        createAt: props.createAt ?? new Date(),
      },
      id,
    );

    return notification;
  }

  get recipientId() {
    return this.props.recipientId;
  }

  get title() {
    return this.props.title;
  }

  get content() {
    return this.props.content;
  }

  get createAt() {
    return this.props.createAt;
  }

  get readAt() {
    return this.props.readAt;
  }
}
