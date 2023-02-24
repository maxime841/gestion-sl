import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Party extends Entity {
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
    type: 'string',
    required: true,
  })
  owner: string;

  @property({
    type: 'date',
    required: true,
  })
  date_party: string;

  @property({
    type: 'string',
    required: true,
  })
  name_dj: string;

  @property({
    type: 'string',
    required: true,
  })
  picture: string;

  @property({
    type: 'date',
  })
  hour?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Party>) {
    super(data);
  }
}

export interface PartyRelations {
  // describe navigational properties here
}

export type PartyWithRelations = Party & PartyRelations;
