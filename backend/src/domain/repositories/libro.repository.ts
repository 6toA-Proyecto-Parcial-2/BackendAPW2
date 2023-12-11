import { CreateLibroDto, UpdateLibroDto } from '../dtos';
import { LibroEntity } from '../entities/libro.entity';



export abstract class LibroRepository {

  abstract create( createLibroDto: CreateLibroDto ): Promise<LibroEntity>;

  abstract getAll(): Promise<LibroEntity[]>;

  abstract findById( id: number ): Promise<LibroEntity>;
  abstract updateById( updateLibroDto: UpdateLibroDto ): Promise<LibroEntity>;
  abstract deleteById( id: number ): Promise<LibroEntity>;

}