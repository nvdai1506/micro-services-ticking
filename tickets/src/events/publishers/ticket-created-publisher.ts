import { Publisher, Subjects, TicketCreatedEvent } from '@nvdai/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
