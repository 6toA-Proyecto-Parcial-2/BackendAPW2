import { prisma } from '../../data/postgres';
import { CreateInventarioDto, InventarioDatasource, InventarioEntity, UpdateInventarioDto } from '../../domain';




export class InventarioDatasourceImpl implements InventarioDatasource {

  async create( createInventarioDto: CreateInventarioDto ): Promise<InventarioEntity> {
    const inventario = await prisma.inventarioModel.create({
      data: createInventarioDto!
    });

    return InventarioEntity.fromObject( inventario );
  }

  async getAll(): Promise<InventarioEntity[]> {
    const inventarios = await prisma.inventarioModel.findMany();
    return inventarios.map( inventario => InventarioEntity.fromObject(inventario) );
  }

  async findById( id: number ): Promise<InventarioEntity> {
    const inventario = await prisma.inventarioModel.findFirst({
      where: { id }
    });

    if ( !inventario ) throw `inventario with id ${ id } not found`;
    return InventarioEntity.fromObject(inventario);
  }

  async updateById( updateInventarioDto: UpdateInventarioDto ): Promise<InventarioEntity> {
    await this.findById( updateInventarioDto.id );
    
    const updatedinventario = await prisma.inventarioModel.update({
      where: { id: updateInventarioDto.id },
      data: updateInventarioDto!.values
    });

    return InventarioEntity.fromObject(updatedinventario);
  }

  async deleteById( id: number ): Promise<InventarioEntity> {
    await this.findById( id );
    const deleted = await prisma.inventarioModel.delete({
      where: { id }
    });

    return InventarioEntity.fromObject( deleted );
  }

}