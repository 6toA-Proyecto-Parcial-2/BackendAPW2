export class LibroEntity {

    constructor(
      public ISBN: number,
      public nombreLibro: string,
      public anopublicacion: number,
      public edicionLibro: string,
      public clasificacionLibro: string,
      
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): LibroEntity {
      const { ISBN, nombreLibro,anopublicacion,edicionLibro,clasificacionLibro, categoriaId } = object;
      if ( !ISBN ) throw 'ISBN is required';
      if ( !nombreLibro ) throw 'nombreLibro is required';
      if ( !anopublicacion ) throw 'anopublicacion is required';
      if ( !edicionLibro ) throw 'edicionLibro is required';
      if ( !clasificacionLibro ) throw 'clasificacionLibro is required';
  
        return new LibroEntity(ISBN, nombreLibro,anopublicacion,edicionLibro,clasificacionLibro)
    }
  
  }
  
  