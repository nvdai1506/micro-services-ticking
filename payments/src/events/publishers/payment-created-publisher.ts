import { Subjects, Publisher, PaymentCreatedEvent } from '@nvdai/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
