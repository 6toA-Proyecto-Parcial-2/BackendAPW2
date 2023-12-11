import { CreateEditorialDto, EditorialDatasource, EditorialEntity, EditorialRepository, UpdateEditorialDto } from '../../domain';


export class EditorialRepositoryImpl implements EditorialRepository {

  constructor(
    private readonly datasource: EditorialDatasource,
  ) { }


  create( createEditorialDto: CreateEditorialDto ): Promise<EditorialEntity> {
    return this.datasource.create( createEditorialDto );
  }

  getAll(): Promise<EditorialEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<EditorialEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateEditorialDto: UpdateEditorialDto ): Promise<EditorialEntity> {
    return this.datasource.updateById( updateEditorialDto );
  }

  deleteById( id: number ): Promise<EditorialEntity> {
    return this.datasource.deleteById( id );
  }

}

