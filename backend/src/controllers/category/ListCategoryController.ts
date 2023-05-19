import { Request, Response } from "express";
import { ListCatagoryService } from "../../services/category/ListCatagoryService";

class ListCategoryController{
  async handle(req: Request, res: Response){
    const listCatagoryService = new ListCatagoryService();

    const category = await listCatagoryService.execute();

    return res.json(category);

  }
}

export { ListCategoryController };