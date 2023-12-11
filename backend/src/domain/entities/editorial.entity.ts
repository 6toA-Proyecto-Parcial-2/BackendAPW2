export class EditorialEntity {

    constructor(
      public nombreEditorial: string,
      public correoEditorial: number,
      public direccionEditorial: string,
      public telefonoEditorial: number,      
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): EditorialEntity {
      const { nombreEditorial, correoEditorial, direccionEditorial, telefonoEditorial } = object;
      if ( !nombreEditorial ) throw 'Nombre del Editorial is required';
      if ( !correoEditorial ) throw 'Correo del Editorial is required';
      if ( !direccionEditorial ) throw 'Direccion del Editorial is required';
      if ( !telefonoEditorial ) throw 'Telefono del Editorial is required';
  
        return new EditorialEntity(nombreEditorial, correoEditorial,direccionEditorial,telefonoEditorial)
    }
  
  }
  
  