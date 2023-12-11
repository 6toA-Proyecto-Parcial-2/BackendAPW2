import { CreateLibroDto, LibroDatasource, LibroEntity, LibroRepository, UpdateLibroDto } from '../../domain';


export class LibroRepositoryImpl implements LibroRepository {

  constructor(
    private readonly datasource: LibroDatasource,
  ) { }


  create( createLibroDto: CreateLibroDto ): Promise<LibroEntity> {
    return this.datasource.create( createLibroDto );
  }

  getAll(): Promise<LibroEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<LibroEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateLibroDto: UpdateLibroDto ): Promise<LibroEntity> {
    return this.datasource.updateById( updateLibroDto );
  }

  deleteById( id: number ): Promise<LibroEntity> {
    return this.datasource.deleteById( id );
  }

}

