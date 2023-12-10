import { prisma } from '../../data/postgres';
import { CreateEncargadoDto, EncargadoDatasource, EncargadoEntity, UpdateEncargadoDto } from '../../domain';




export class EncargadoDatasourceImpl implements EncargadoDatasource {

  async create( createEncargadoDto: CreateEncargadoDto ): Promise<EncargadoEntity> {
    const { inventario, ...rest } =  createEncargadoDto
    const encargado = await prisma.encargadoModel.create({
      data: rest
    });

    return EncargadoEntity.fromObject( encargado );
  }

  async getAll(): Promise<EncargadoEntity[]> {
    const encargados = await prisma.encargadoModel.findMany();
    return encargados.map( encargado => EncargadoEntity.fromObject(encargado) );
  }

  async findById( id: number ): Promise<EncargadoEntity> {
    const encargado = await prisma.encargadoModel.findFirst({
      where: { id }
    });

    if ( !encargado ) throw `encargado with id ${ id } not found`;
    return EncargadoEntity.fromObject(encargado);
  }

  async updateById( updateEncargadoDto: UpdateEncargadoDto ): Promise<EncargadoEntity> {
    await this.findById( updateEncargadoDto.id );
    
    const updatedencargado = await prisma.encargadoModel.update({
      where: { id: updateEncargadoDto.id },
      data: updateEncargadoDto!.values
    });

    return EncargadoEntity.fromObject(updatedencargado);
  }

  async deleteById( id: number ): Promise<EncargadoEntity> {
    await this.findById( id );
    const deleted = await prisma.encargadoModel.delete({
      where: { id }
    });

    return EncargadoEntity.fromObject( deleted );
  }

}