import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GestionslDataSource} from '../datasources';
import {Dancer, DancerRelations} from '../models';

export class DancerRepository extends DefaultCrudRepository<
  Dancer,
  typeof Dancer.prototype.id,
  DancerRelations
> {
  constructor(
    @inject('datasources.gestionsl') dataSource: GestionslDataSource,
  ) {
    super(Dancer, dataSource);
  }
}
