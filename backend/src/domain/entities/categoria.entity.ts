export class CategoriaEntity {

    constructor(
      public idCategoria: number,
      public nombreCategoria: string,
      public CategoriaPrincipal: string,
      public librosId: number,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): CategoriaEntity {
      const { idCategoria, nombreCategoria,CategoriaPrincipal,librosId } = object;
      if ( !idCategoria ) throw 'idCategoria is required';
      if ( !nombreCategoria ) throw 'nombreCategoria is required';
      if ( !CategoriaPrincipal ) throw 'CategoriaPrincipal is required';
      if ( !librosId ) throw 'librosId is required';
  
        return new CategoriaEntity(idCategoria, nombreCategoria,CategoriaPrincipal,librosId)
    }
  
  }
  
  