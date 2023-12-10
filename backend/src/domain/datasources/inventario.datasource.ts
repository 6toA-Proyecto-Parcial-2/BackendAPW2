import { CreateInventarioDto, UpdateInventarioDto } from '../dtos';
import { InventarioEntity } from '../entities/inventario.entity';



export abstract class InventarioDatasource {

  abstract create( createInventarioDto: CreateInventarioDto ): Promise<InventarioEntity>;

  abstract getAll(): Promise<InventarioEntity[]>;

  abstract findById( id: number ): Promise<InventarioEntity>;
  abstract updateById( updateInventarioDto: UpdateInventarioDto ): Promise<InventarioEntity>;
  abstract deleteById( id: number ): Promise<InventarioEntity>;

}