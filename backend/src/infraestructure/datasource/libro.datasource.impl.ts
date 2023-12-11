import { prisma } from '../../data/postgres';
import { CreateLibroDto, LibroDatasource, LibroEntity, UpdateLibroDto } from '../../domain';




export class LibroDatasourceImpl implements LibroDatasource {

  async create( createLibroDto: CreateLibroDto ): Promise<LibroEntity> {
    const libro = await prisma.libroModel.create({
      data: createLibroDto!
    });

    return LibroEntity.fromObject( libro );
  }

  async getAll(): Promise<LibroEntity[]> {
    const libros = await prisma.libroModel.findMany();
    return libros.map( libro => LibroEntity.fromObject(libro) );
  }

  async findById( id: number ): Promise<LibroEntity> {
    const libro = await prisma.libroModel.findFirst({
      where: { id }
    });

    if ( !libro ) throw `Libro with id ${ id } not found`;
    return LibroEntity.fromObject(libro);
  }

  async updateById( updateLibroDto: UpdateLibroDto ): Promise<LibroEntity> {
    await this.findById( updateLibroDto.id );
    
    const updatedLibro = await prisma.libroModel.update({
      where: { id: updateLibroDto.id },
      data: updateLibroDto!.values
    });

    return LibroEntity.fromObject(updatedLibro);
  }

  async deleteById( id: number ): Promise<LibroEntity> {
    await this.findById( id );
    const deleted = await prisma.libroModel.delete({
      where: { id }
    });

    return LibroEntity.fromObject( deleted );
  }

}