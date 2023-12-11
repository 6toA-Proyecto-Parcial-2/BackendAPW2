import { prisma } from '../../data/postgres';
import { CreateCategoriaDto, CategoriaDatasource, CategoriaEntity, UpdateCategoriaDto } from '../../domain';




export class CategoriaDatasourceImpl implements CategoriaDatasource {

  async create( createCategoriaDto: CreateCategoriaDto ): Promise<CategoriaEntity> {
    const { librosId, ...rest } =  createCategoriaDto
    const categoria = await prisma.categoriaModel.create({
      data: createCategoriaDto!
    });

    return CategoriaEntity.fromObject( categoria );
  }

  async getAll(): Promise<CategoriaEntity[]> {
    const categorias = await prisma.categoriaModel.findMany();
    return categorias.map( categoria => CategoriaEntity.fromObject(categoria) );
  }

  async findById( id: number ): Promise<CategoriaEntity> {
    const categoria = await prisma.categoriaModel.findFirst({
      where: { id }
    });

    if ( !categoria ) throw `categorias with id ${ id } not found`;
    return CategoriaEntity.fromObject(categoria);
  }

  async updateById( updateCategoriaDto: UpdateCategoriaDto ): Promise<CategoriaEntity> {
    await this.findById( updateCategoriaDto.id );
    
    const updatedCategoria = await prisma.categoriaModel.update({
      where: { id: updateCategoriaDto.id },
      data: updateCategoriaDto!.values
    });

    return CategoriaEntity.fromObject(updatedCategoria);
  }

  async deleteById( id: number ): Promise<CategoriaEntity> {
    await this.findById( id );
    const deleted = await prisma.categoriaModel.delete({
      where: { id }
    });

    return CategoriaEntity.fromObject( deleted );
  }

}