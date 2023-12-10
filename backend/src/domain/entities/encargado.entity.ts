import { InventarioEntity } from "./inventario.entity";

export class EncargadoEntity {

    constructor(
      public id: number,
      public correoEncargado: string,
      public nombreEncargado: string,
      public telefonoEncargado: number,
      public inventario?: InventarioEntity[],
    ) {}
  
    get Inventario() {
      return this.inventario;
    }
  
    public static fromObject( object: {[key: string]: any} ): EncargadoEntity {
      const { id, correoEncargado, nombreEncargado, telefonoEncargado, inventario } = object;
      if ( !id ) throw 'Id is required';
      if ( !correoEncargado ) throw 'correoEncargado is required';
      if ( !nombreEncargado ) throw 'nombreEncargado is required';
      if ( !telefonoEncargado ) throw 'telefonoEncargado is required';

        return new EncargadoEntity(id, correoEncargado, nombreEncargado, telefonoEncargado, inventario)
    }
  }