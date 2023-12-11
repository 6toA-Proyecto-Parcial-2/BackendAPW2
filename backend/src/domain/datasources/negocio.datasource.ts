import { CreateNegocioDto, UpdateNegocioDto } from '../dtos';
import { NegocioEntity } from '../entities/negocio.entity';



export abstract class NegocioDatasource {

  abstract create( createNegocioDto: CreateNegocioDto ): Promise<NegocioEntity>;

  abstract getAll(): Promise<NegocioEntity[]>;

  abstract findById( id: number ): Promise<NegocioEntity>;
  abstract updateById( updateNegocioDto: UpdateNegocioDto ): Promise<NegocioEntity>;
  abstract deleteById( id: number ): Promise<NegocioEntity>;
a
}