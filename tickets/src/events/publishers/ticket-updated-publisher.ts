import { Publisher, Subjects, TicketUpdatedEvent } from '@nvdai/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
