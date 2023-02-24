import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Dancer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
    required: true,
  })
  date_entrance: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dancer>) {
    super(data);
  }
}

export interface DancerRelations {
  // describe navigational properties here
}

export type DancerWithRelations = Dancer & DancerRelations;
