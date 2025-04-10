import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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
}
