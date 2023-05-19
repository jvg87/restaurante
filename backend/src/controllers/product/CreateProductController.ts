import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


class CreateProductController{
  async handle(req: Request, res: Response){
    const { name, price, description, category_id } = req.body;

    const createCategoryService = new CreateProductService();

    if (!req.file){
      throw new Error('error upload file')
    } else {

      const { filename } = req.file;

      console.log(filename);

      const product = await createCategoryService.execute({
        name,
        price,
        description,
        banner: '',
        category_id
      });
    }

    return res.json()

  }
}

export { CreateProductController };