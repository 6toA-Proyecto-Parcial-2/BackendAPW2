import { InventarioEntity } from "./inventario.entity";

export class NegocioEntity {

    constructor(
      public id: number,
      public correoNegocio: string,
      public nombreNegocio: string,
      public direccionNegocio: string,
      public telefonoNegocio: number,
      public totalLibros: number,
      public inventario?: InventarioEntity[],
    ) {}
    get Inventario() {
      return this.inventario;
    }
    public static fromObject( object: {[key: string]: any} ): NegocioEntity {
      const { id, correoNegocio, nombreNegocio, direccionNegocio, telefonoNegocio, totalLibros, inventario} = object;
      if ( !id ) throw 'Id is required';
      if ( !correoNegocio ) throw 'Business email is required';
      if ( !nombreNegocio ) throw 'Business name is required';
      if ( !direccionNegocio ) throw 'Business direction is required';
      if ( !telefonoNegocio ) throw 'Business phone is required';
      if ( !totalLibros ) throw 'Total books is required';
  
        return new NegocioEntity(id, correoNegocio, nombreNegocio, direccionNegocio, telefonoNegocio, totalLibros, inventario)
    }
  
  }