/*import { Router } from "express";
import { LibroController } from "./controller";
import { LibroDatasourceImpl } from '../../infraestructure/datasource/libro.datasource.impl';
import { LibroRepositoryImpl } from '../../infraestructure/repositories/libro.repository.impl';

export class LibroRoutes {
    static get routes(): Router {
        const router = Router();


        const datasource = new LibroDatasourceImpl();
        const negocioRepository = new NegocioRepositoryImpl( datasource );
        const negocioController = new LibroController(negocioRepository);


        router.get('/',LibrosController.getlibro);
        router.get('/:id', LibrosController.getlibroById);
        router.post('/', LibrosController.createLibro);
        router.put('/:id', LibrosController.updatelibro);
        router.delete('/:id', LibrosController.deletelibro);
        return router;
    }
}*/


import { Router } from "express";
import { LibroController } from "./controller";

export class LibroRoutes {
    static get routes(): Router {
        const router = Router();
        const LibrosController = new LibroController();
        router.get('/',LibrosController.getlibro);
        router.get('/:id', LibrosController.getlibroById);
        router.post('/', LibrosController.createLibro);
        router.put('/:id', LibrosController.updatelibro);
        router.delete('/:id', LibrosController.deletelibro);
        return router;
    }
}