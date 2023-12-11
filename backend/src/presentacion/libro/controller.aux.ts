// DDD
import { Request, Response } from 'express';
import { CreateLibroDto, UpdateLibroDto } from '../../domain/dtos';
import { LibroRepository } from '../../domain';


export class LibrosController {

  //* DI
  constructor(
    private readonly libroRepository: LibroRepository,
  ) { }


  public getLibros = async ( req: Request, res: Response ) => {
    const libros = await this.libroRepository.getAll();
    return res.json( libros );
  };

  public getLibroById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const libro = await this.libroRepository.findById( id );
      res.json( libro );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createLibro = async ( req: Request, res: Response ) => {
    const [ error, createLibroDto ] = CreateLibroDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const libro = await this.libroRepository.create( createLibroDto! );
    res.json( libro );

  };

  public updateLibro = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateLibroDto ] = UpdateLibroDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedLibro = await this.libroRepository.updateById( updateLibroDto! );
    return res.json( updatedLibro );

  };


  public deleteLibro = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedLibro = await this.libroRepository.deleteById( id );
    res.json( deletedLibro );

  };



}