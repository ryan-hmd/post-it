import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Wall from './wall.js'
import Role from './role.js'

export default class Member extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare userId: number

    @column()
    declare wallId: number

    @column()
    declare localRoleId: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

    @belongsTo(() => Wall)
    declare wall: BelongsTo<typeof Wall>

    @belongsTo(() => Role, {
        foreignKey: 'localRoleId',
    })
    declare localRole: BelongsTo<typeof Role>
}
