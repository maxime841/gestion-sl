import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GestionslDataSource} from '../datasources';
import {Picture, PictureRelations} from '../models';

export class PictureRepository extends DefaultCrudRepository<
  Picture,
  typeof Picture.prototype.id,
  PictureRelations
> {
  constructor(
    @inject('datasources.gestionsl') dataSource: GestionslDataSource,
  ) {
    super(Picture, dataSource);
  }
}
