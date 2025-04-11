import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import type { NotificationStatus } from '#types/enums'

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

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}
