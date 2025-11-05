import { InMemoryNotificationsRepository } from "test/repositories/in-memory-notifications-repository";
import { SendNotificationUseCase } from "./send-notification";

// SUT = System Under Test
let sut: SendNotificationUseCase;
let inMemoryRepository: InMemoryNotificationsRepository;

describe("Send Notification", () => {
  beforeEach(() => {
    inMemoryRepository = new InMemoryNotificationsRepository();
    sut = new SendNotificationUseCase(inMemoryRepository);
  });

  it("should be able to send a notification", async () => {
    const content = "Nova notificação";

    const { notification } = await sut.execute({
      recipientId: "1",
      title: "Título da notificação",
      content,
    });

    expect(notification.id).toBeTruthy();
    expect(inMemoryRepository.items[0].id).toEqual(notification.id);
  });
});
