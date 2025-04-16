import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Postit from './postit.js'
import Wall from './wall.js'

export default class Tag extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare description?: string

    @manyToMany(() => Wall, {
        pivotTable: 'tags_pivot',
        pivotColumns: ['weight'],
        pivotTimestamps: false
    })
    declare walls: ManyToMany<typeof Wall>

    @manyToMany(() => Postit, {
        pivotTable: 'tags_pivot',
        pivotColumns: ['weight'],
        pivotTimestamps: false
    })
    declare postits: ManyToMany<typeof Postit>
}