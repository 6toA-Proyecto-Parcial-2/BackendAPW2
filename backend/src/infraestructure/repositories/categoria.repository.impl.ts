import { CreateCategoriaDto, CategoriaDatasource, CategoriaEntity, CategoriaRepository, UpdateCategoriaDto } from '../../domain';


export class CategoriaRepositoryImpl implements CategoriaRepository {

  constructor(
    private readonly datasource: CategoriaDatasource,
  ) { }


  create( createCategoriaDto: CreateCategoriaDto ): Promise<CategoriaEntity> {
    return this.datasource.create( createCategoriaDto );
  }

  getAll(): Promise<CategoriaEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CategoriaEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateCategoriaDto: UpdateCategoriaDto ): Promise<CategoriaEntity> {
    return this.datasource.updateById( updateCategoriaDto );
  }

  deleteById( id: number ): Promise<CategoriaEntity> {
    return this.datasource.deleteById( id );
  }

}

