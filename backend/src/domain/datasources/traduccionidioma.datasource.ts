import { CreateTraduccionIdiomaDto, UpdateTraduccionIdiomaDto } from '../dtos';
import { TraduccionIdiomaEntity } from '../entities/traduccionIdioma.entity';



export abstract class TraduccionIdiomaDatasource {

  abstract create( createTraduccionIdiomaDto: CreateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity>;

  abstract getAll(): Promise<TraduccionIdiomaEntity[]>;

  abstract findById( id: number ): Promise<TraduccionIdiomaEntity>;
  abstract updateById( updateTraduccionIdiomaDto: UpdateTraduccionIdiomaDto ): Promise<TraduccionIdiomaEntity>;
  abstract deleteById( id: number ): Promise<TraduccionIdiomaEntity>;

}