import { CreateEditorialDto, UpdateEditorialDto } from '../dtos';
import { EditorialEntity } from '../entities/editorial.entity';



export abstract class EditorialRepository {

  abstract create( createEditorialDto: CreateEditorialDto ): Promise<EditorialEntity>;

  abstract getAll(): Promise<EditorialEntity[]>;

  abstract findById( id: number ): Promise<EditorialEntity>;
  abstract updateById( updateEditorialDto: UpdateEditorialDto ): Promise<EditorialEntity>;
  abstract deleteById( id: number ): Promise<EditorialEntity>;

}