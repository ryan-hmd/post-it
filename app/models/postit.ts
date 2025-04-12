import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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

    /**
     * We keep a track on Post-it / Response for moderation purpose
     */
    @column()
    declare deleted: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}
