import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GestionslDataSource} from '../datasources';
import {Dj, DjRelations} from '../models';

export class DjRepository extends DefaultCrudRepository<
  Dj,
  typeof Dj.prototype.id,
  DjRelations
> {
  constructor(
    @inject('datasources.gestionsl') dataSource: GestionslDataSource,
  ) {
    super(Dj, dataSource);
  }
}
