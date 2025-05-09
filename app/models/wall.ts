import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Postit from './postit.js'
import Member from './member.js'
import User from './user.js'
import Tag from './tag.js'

export default class Wall extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare slug: string

    @column()
    declare name: string

    @column()
    declare description?: string

    @column()
    declare ownerId: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @belongsTo(() => User, {
        foreignKey: 'ownerId',
    })
    declare owner: BelongsTo<typeof User>

    @hasMany(() => Postit)
    declare threads: HasMany<typeof Postit>

    @hasMany(() => Member)
    declare members: HasMany<typeof Member>

    @manyToMany(() => Tag, {
        pivotTable: 'tags_pivot',
        pivotColumns: ['weight'],
        pivotTimestamps: false,
    })
    declare tags: ManyToMany<typeof Tag>
}
