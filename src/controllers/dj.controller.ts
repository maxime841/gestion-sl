import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Dj} from '../models';
import {DjRepository} from '../repositories';

export class DjController {
  constructor(
    @repository(DjRepository)
    public djRepository : DjRepository,
  ) {}

  @post('/djs')
  @response(200, {
    description: 'Dj model instance',
    content: {'application/json': {schema: getModelSchemaRef(Dj)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dj, {
            title: 'NewDj',
            exclude: ['id'],
          }),
        },
      },
    })
    dj: Omit<Dj, 'id'>,
  ): Promise<Dj> {
    return this.djRepository.create(dj);
  }

  @get('/djs/count')
  @response(200, {
    description: 'Dj model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Dj) where?: Where<Dj>,
  ): Promise<Count> {
    return this.djRepository.count(where);
  }

  @get('/djs')
  @response(200, {
    description: 'Array of Dj model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Dj, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Dj) filter?: Filter<Dj>,
  ): Promise<Dj[]> {
    return this.djRepository.find(filter);
  }

  @patch('/djs')
  @response(200, {
    description: 'Dj PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dj, {partial: true}),
        },
      },
    })
    dj: Dj,
    @param.where(Dj) where?: Where<Dj>,
  ): Promise<Count> {
    return this.djRepository.updateAll(dj, where);
  }

  @get('/djs/{id}')
  @response(200, {
    description: 'Dj model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Dj, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Dj, {exclude: 'where'}) filter?: FilterExcludingWhere<Dj>
  ): Promise<Dj> {
    return this.djRepository.findById(id, filter);
  }

  @patch('/djs/{id}')
  @response(204, {
    description: 'Dj PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dj, {partial: true}),
        },
      },
    })
    dj: Dj,
  ): Promise<void> {
    await this.djRepository.updateById(id, dj);
  }

  @put('/djs/{id}')
  @response(204, {
    description: 'Dj PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() dj: Dj,
  ): Promise<void> {
    await this.djRepository.replaceById(id, dj);
  }

  @del('/djs/{id}')
  @response(204, {
    description: 'Dj DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.djRepository.deleteById(id);
  }
}
