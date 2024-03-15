import { Subjects, Publisher, OrderCancelledEvent } from '@nvdai/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
