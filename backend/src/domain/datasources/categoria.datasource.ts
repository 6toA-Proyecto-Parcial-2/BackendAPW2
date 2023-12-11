import { CreateCategoriaDto, UpdateCategoriaDto } from '../dtos';
import { CategoriaEntity } from '../entities/categoria.entity';



export abstract class CategoriaDatasource {

  abstract create( createCategoriaDto: CreateCategoriaDto ): Promise<CategoriaEntity>;

  abstract getAll(): Promise<CategoriaEntity[]>;

  abstract findById( id: number ): Promise<CategoriaEntity>;
  abstract updateById( updateCategoriaDto: UpdateCategoriaDto ): Promise<CategoriaEntity>;
  abstract deleteById( id: number ): Promise<CategoriaEntity>;

}