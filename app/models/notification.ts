import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { NotificationStatus } from '#enums/notification'
import User from './user.js'

export default class Notification extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare userId: string

    @column()
    declare href?: string

    @column()
    declare status: NotificationStatus

    @column()
    declare title: string

    @column()
    declare description?: string

    @column()
    declare opened: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime()
    declare openedAt: DateTime

    // TODO : create a hook markAsOpened to update 'openedAt'

    @belongsTo(() => User)
    declare User: BelongsTo<typeof User>
}
