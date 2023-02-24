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
import {Dancer} from '../models';
import {DancerRepository} from '../repositories';

export class DancerController {
  constructor(
    @repository(DancerRepository)
    public dancerRepository : DancerRepository,
  ) {}

  @post('/dancers')
  @response(200, {
    description: 'Dancer model instance',
    content: {'application/json': {schema: getModelSchemaRef(Dancer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dancer, {
            title: 'NewDancer',
            exclude: ['id'],
          }),
        },
      },
    })
    dancer: Omit<Dancer, 'id'>,
  ): Promise<Dancer> {
    return this.dancerRepository.create(dancer);
  }

  @get('/dancers/count')
  @response(200, {
    description: 'Dancer model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Dancer) where?: Where<Dancer>,
  ): Promise<Count> {
    return this.dancerRepository.count(where);
  }

  @get('/dancers')
  @response(200, {
    description: 'Array of Dancer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Dancer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Dancer) filter?: Filter<Dancer>,
  ): Promise<Dancer[]> {
    return this.dancerRepository.find(filter);
  }

  @patch('/dancers')
  @response(200, {
    description: 'Dancer PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dancer, {partial: true}),
        },
      },
    })
    dancer: Dancer,
    @param.where(Dancer) where?: Where<Dancer>,
  ): Promise<Count> {
    return this.dancerRepository.updateAll(dancer, where);
  }

  @get('/dancers/{id}')
  @response(200, {
    description: 'Dancer model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Dancer, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Dancer, {exclude: 'where'}) filter?: FilterExcludingWhere<Dancer>
  ): Promise<Dancer> {
    return this.dancerRepository.findById(id, filter);
  }

  @patch('/dancers/{id}')
  @response(204, {
    description: 'Dancer PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dancer, {partial: true}),
        },
      },
    })
    dancer: Dancer,
  ): Promise<void> {
    await this.dancerRepository.updateById(id, dancer);
  }

  @put('/dancers/{id}')
  @response(204, {
    description: 'Dancer PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() dancer: Dancer,
  ): Promise<void> {
    await this.dancerRepository.replaceById(id, dancer);
  }

  @del('/dancers/{id}')
  @response(204, {
    description: 'Dancer DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.dancerRepository.deleteById(id);
  }
}
