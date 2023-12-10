import { CreateEncargadoDto, EncargadoDatasource, EncargadoEntity, EncargadoRepository, UpdateEncargadoDto } from '../../domain';


export class EncargadoRepositoryImpl implements EncargadoRepository {

  constructor(
    private readonly datasource: EncargadoDatasource,
  ) { }


  create( createEncargadoDto: CreateEncargadoDto ): Promise<EncargadoEntity> {
    return this.datasource.create( createEncargadoDto );
  }

  getAll(): Promise<EncargadoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<EncargadoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateEncargadoDto: UpdateEncargadoDto ): Promise<EncargadoEntity> {
    return this.datasource.updateById( updateEncargadoDto );
  }

  deleteById( id: number ): Promise<EncargadoEntity> {
    return this.datasource.deleteById( id );
  }

}

