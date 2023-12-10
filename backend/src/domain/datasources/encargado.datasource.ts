import { CreateEncargadoDto, UpdateEncargadoDto } from '../dtos';
import { EncargadoEntity } from '../entities/encargado.entity';



export abstract class EncargadoDatasource {

  abstract create( createEncargadoDto: CreateEncargadoDto ): Promise<EncargadoEntity>;

  abstract getAll(): Promise<EncargadoEntity[]>;

  abstract findById( id: number ): Promise<EncargadoEntity>;
  abstract updateById( updateEncargadoDto: UpdateEncargadoDto ): Promise<EncargadoEntity>;
  abstract deleteById( id: number ): Promise<EncargadoEntity>;

}