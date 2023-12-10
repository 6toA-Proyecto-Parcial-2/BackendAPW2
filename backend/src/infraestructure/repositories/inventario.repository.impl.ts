import { CreateInventarioDto, InventarioDatasource, InventarioEntity, InventarioRepository, UpdateInventarioDto } from '../../domain';


export class InventarioRepositoryImpl implements InventarioRepository {

  constructor(
    private readonly datasource: InventarioDatasource,
  ) { }


  create( createInventarioDto: CreateInventarioDto ): Promise<InventarioEntity> {
    return this.datasource.create( createInventarioDto );
  }

  getAll(): Promise<InventarioEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<InventarioEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateInventarioDto: UpdateInventarioDto ): Promise<InventarioEntity> {
    return this.datasource.updateById( updateInventarioDto );
  }

  deleteById( id: number ): Promise<InventarioEntity> {
    return this.datasource.deleteById( id );
  }

}

