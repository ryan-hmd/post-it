import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { CountryCode } from '#enums/country'
import User from './user.js'

export default class Profile extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare userId: number

    @column()
    declare firstName?: string

    @column()
    declare lastName?: string

    @column()
    declare countryCode?: CountryCode

    @column()
    declare pictureURL?: string

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>
}
