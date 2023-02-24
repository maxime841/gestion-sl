import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Picture extends Entity {
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
  picture_url: string;

  @property({
    type: 'boolean',
    required: true,
  })
  favori: boolean;

  @property({
    type: 'number',
    required: true,
  })
  picturable_id: number;

  @property({
    type: 'string',
    required: true,
  })
  picturable_type: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Picture>) {
    super(data);
  }
}

export interface PictureRelations {
  // describe navigational properties here
}

export type PictureWithRelations = Picture & PictureRelations;
