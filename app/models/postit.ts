import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Wall from './wall.js'
import Tag from './tag.js'

export default class Postit extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare pinned: boolean

    @column()
    declare threadId: number | null

    @column()
    declare wallId: number

    @column()
    declare authorId: number

    @column()
    declare slug: string

    @column()
    declare title: string

    @column()
    declare content: string

    // We keep a track on Post-it / Response for moderation purpose
    @column()
    declare deleted: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User, {
        foreignKey: 'authorId',
    })
    declare author: BelongsTo<typeof User>

    @hasMany(() => Postit)
    declare responses: HasMany<typeof Postit>

    @belongsTo(() => Postit, {
        foreignKey: 'threadId'
    })
    declare root: BelongsTo<typeof Postit>

    @belongsTo(() => Wall)
    declare wall: BelongsTo<typeof Wall>

    @manyToMany(() => Tag, {
        pivotTable: 'tags_pivot',
        pivotColumns: ['weight'],
        pivotTimestamps: false
    })
    declare postits: ManyToMany<typeof Tag>
}
