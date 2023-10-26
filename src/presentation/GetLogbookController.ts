import { Request, Response } from "express";
import { GetLogbookUseCase } from "../application/GetLogbookUseCase";

export class GetLogbookController {
  public constructor(private readonly _useCase: GetLogbookUseCase) {
  }

  public async handle(req: Request, res: Response): Promise<void> {
    const result = await this._useCase.execute({
      id: req.body.id
    })

    res.json(result)
  }
}