export class InventarioEntity {

  constructor(
    public id: number,
    public numeroCopias: number,
    public estado: string,
    public precioVenta: number,
    public precioAlquiler: number,
    public encargadoId: string,
    public negocioId: string,
  ) {}

  public static fromObject( object: {[key: string]: any} ): InventarioEntity {
    const { id, numeroCopias, estado, precioVenta, precioAlquiler, encargadoId, negocioId } = object;
    if ( !id ) throw 'Id is required';
    if ( !numeroCopias ) throw 'numeroCopias is required';
    if ( !estado ) throw 'estado is required';
    if ( !precioVenta ) throw 'precioVenta is required';
    if ( !precioAlquiler ) throw 'precioAlquiler is required';
    if ( !encargadoId ) throw 'encargadoId is required';
    if ( !negocioId ) throw 'encargadoId is required';

      return new InventarioEntity(id, numeroCopias, estado, precioVenta, precioAlquiler, encargadoId, negocioId)
  }

}

