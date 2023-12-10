import { CreateNegocioDto, NegocioDatasource, NegocioEntity, NegocioRepository, UpdateNegocioDto } from '../../domain';


export class NegocioRepositoryImpl implements NegocioRepository {

  constructor(
    private readonly datasource: NegocioDatasource,
  ) { }


  create( createNegocioDto: CreateNegocioDto ): Promise<NegocioEntity> {
    return this.datasource.create( createNegocioDto );
  }

  getAll(): Promise<NegocioEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<NegocioEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateNegocioDto: UpdateNegocioDto ): Promise<NegocioEntity> {
    return this.datasource.updateById( updateNegocioDto );
  }

  deleteById( id: number ): Promise<NegocioEntity> {
    return this.datasource.deleteById( id );
  }

}

