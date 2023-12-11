// DDD
import { Request, Response } from 'express';
import { CreateCategoriaDto, UpdateCategoriaDto } from '../../domain/dtos';
import { CategoriaRepository } from '../../domain';


export class CategoriasController {

  //* DI
  constructor(
    private readonly categoriaRepository: CategoriaRepository,
  ) { }


  public getCategorias = async ( req: Request, res: Response ) => {
    const categorias = await this.categoriaRepository.getAll();
    return res.json( categorias );
  };

  public getCategoriaById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const categoria = await this.categoriaRepository.findById( id );
      res.json( categoria );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCategoria = async ( req: Request, res: Response ) => {
    const [ error, createCategoriaDto ] = CreateCategoriaDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const categoria = await this.categoriaRepository.create( createCategoriaDto! );
    res.json( categoria );

  };

  public updateCategoria = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateCategoriaDto ] = UpdateCategoriaDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedCategoria = await this.categoriaRepository.updateById( updateCategoriaDto! );
    return res.json( updatedCategoria );

  };


  public deleteCategoria = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedCategoria = await this.categoriaRepository.deleteById( id );
    res.json( deletedCategoria );

  };



}