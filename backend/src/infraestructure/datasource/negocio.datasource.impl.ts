import { prisma } from '../../data/postgres';
import { CreateNegocioDto, NegocioDatasource, NegocioEntity, UpdateNegocioDto } from '../../domain';




export class NegocioDatasourceImpl implements NegocioDatasource {

  async create( createNegocioDto: CreateNegocioDto ): Promise<NegocioEntity> {
    const { inventario, ...rest } =  createNegocioDto
    const negocio = await prisma.negocioModel.create({
      data: rest
    });

    return NegocioEntity.fromObject( negocio );
  }

  async getAll(): Promise<NegocioEntity[]> {
    const negocios = await prisma.negocioModel.findMany();
    return negocios.map( negocio => NegocioEntity.fromObject(negocio) );
  }

  async findById( id: number ): Promise<NegocioEntity> {
    const negocio = await prisma.negocioModel.findFirst({
      where: { id }
    });

    if ( !negocio ) throw `negocio with id ${ id } not found`;
    return NegocioEntity.fromObject(negocio);
  }

  async updateById( updateNegocioDto: UpdateNegocioDto ): Promise<NegocioEntity> {
    await this.findById( updateNegocioDto.id );
    
    const updatednegocio = await prisma.negocioModel.update({
      where: { id: updateNegocioDto.id },
      data: updateNegocioDto!.values
    });

    return NegocioEntity.fromObject(updatednegocio);
  }

  async deleteById( id: number ): Promise<NegocioEntity> {
    await this.findById( id );
    const deleted = await prisma.negocioModel.delete({
      where: { id }
    });

    return NegocioEntity.fromObject( deleted );
  }

}