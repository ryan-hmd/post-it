import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Follow extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare followerUserId: string

    @column()
    declare followedUserid: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @belongsTo(() => User, {
        foreignKey: 'followerUserId',
    })
    declare follower: BelongsTo<typeof User>

    @belongsTo(() => User, {
        foreignKey: 'followedUserId',
    })
    declare followed: BelongsTo<typeof User>
}
