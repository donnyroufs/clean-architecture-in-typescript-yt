import { Logbook } from "../domain/Logbook";

export interface ILogbookRepository {
  find(id: string): Promise<Logbook | null>;
  save(logbook: Logbook): Promise<boolean>;
}
