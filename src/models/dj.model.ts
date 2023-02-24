import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Dj extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  style: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dj>) {
    super(data);
  }
}

export interface DjRelations {
  // describe navigational properties here
}

export type DjWithRelations = Dj & DjRelations;
