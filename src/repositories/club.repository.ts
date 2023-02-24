import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {GestionslDataSource} from '../datasources';
import {Club, ClubRelations} from '../models';

export class ClubRepository extends DefaultCrudRepository<
  Club,
  typeof Club.prototype.id,
  ClubRelations
> {
  constructor(
    @inject('datasources.gestionsl') dataSource: GestionslDataSource,
  ) {
    super(Club, dataSource);
  }
}
