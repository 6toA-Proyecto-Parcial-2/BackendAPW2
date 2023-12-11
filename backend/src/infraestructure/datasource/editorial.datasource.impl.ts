import { prisma } from '../../data/postgres';
import { CreateEditorialDto, EditorialDatasource, EditorialEntity, UpdateEditorialDto } from '../../domain';



export class EditorialDatasourceImpl implements EditorialDatasource {

  async create( createEditorialDto: CreateEditorialDto ): Promise<EditorialEntity> {
    const editorial = await prisma.editorialModel.create({
      data: createEditorialDto!
    });

    return EditorialEntity.fromObject( editorial );
  }

  async getAll(): Promise<EditorialEntity[]> {
    const editorials = await prisma.editorialModel.findMany();
    return editorials.map( editorial => EditorialEntity.fromObject(editorial) );
  }

  async findById( id: number ): Promise<EditorialEntity> {
    const editorial = await prisma.editorialModel.findFirst({
      where: { id }
    });

    if ( !editorial ) throw `Editorial with id ${ id } not found`;
    return EditorialEntity.fromObject(editorial);
  }

  async updateById( updateEditorialDto: UpdateEditorialDto ): Promise<EditorialEntity> {
    await this.findById( updateEditorialDto.id );
    
    const updatedEditorial = await prisma.editorialModel.update({
      where: { id: updateEditorialDto.id },
      data: updateEditorialDto!.values
    });

    return EditorialEntity.fromObject(updatedEditorial);
  }

  async deleteById( id: number ): Promise<EditorialEntity> {
    await this.findById( id );
    const deleted = await prisma.editorialModel.delete({
      where: { id }
    });

    return EditorialEntity.fromObject( deleted );
  }

}