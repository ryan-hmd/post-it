import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

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

    @manyToMany(() => User, {
        pivotTable: 'walls_members',
        pivotColumns: ['local_role_id'],
        pivotTimestamps: {
            createdAt: 'created_at',
            updatedAt: false,
        },
    })
    declare members: ManyToMany<typeof User>
}
