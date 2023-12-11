// DDD
import { Request, Response } from 'express';
import { CreateEditorialDto, UpdateEditorialDto } from '../../domain/dtos';
import { EditorialRepository } from '../../domain/repositories/editorial.repository';


export class EditorialsController {

  //* DI
  constructor(
    private readonly editorialRepository: EditorialRepository,
  ) { }


  public getEditorials = async ( req: Request, res: Response ) => {
    const editorials = await this.editorialRepository.getAll();
    return res.json( editorials );
  };

  public getLibroById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const editorial = await this.editorialRepository.findById( id );
      res.json( editorial );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createEditorial = async ( req: Request, res: Response ) => {
    const [ error, createEditorialDto ] = CreateEditorialDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const editorial = await this.editorialRepository.create( createEditorialDto! );
    res.json( editorial );

  };

  public updateLibro = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateEditorialDto ] = UpdateEditorialDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedLibro = await this.editorialRepository.updateById( updateEditorialDto! );
    return res.json( updatedLibro );

  };


  public deleteLibro = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedLibro = await this.editorialRepository.deleteById( id );
    res.json( deletedLibro );

  };



}