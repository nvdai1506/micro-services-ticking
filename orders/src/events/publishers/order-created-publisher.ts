import { Publisher, OrderCreatedEvent, Subjects } from '@nvdai/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
