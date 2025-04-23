import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { ReportReason, ReportStatus, ReportTargetType } from '#enums/report'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Report extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare reporterId: number

    @column()
    declare targetType: ReportTargetType

    @column()
    declare targetId: number

    @column()
    declare reason: ReportReason

    @column()
    declare description: string

    @column()
    declare status: ReportStatus

    @column()
    declare moderatorId: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User, {
        foreignKey: 'reporterId',
    })
    declare reporter: BelongsTo<typeof User>

    @belongsTo(() => User, {
        foreignKey: 'moderatorId',
    })
    declare moderator: BelongsTo<typeof User>
}
