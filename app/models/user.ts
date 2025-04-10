import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Profile from './profile.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email', 'nickname'],
    passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare nickname: string

    @column()
    declare email: string

    @column({ serializeAs: null })
    declare password: string

    @column()
    declare roleId: number

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @hasOne(() => Profile)
    declare profile: HasOne<typeof Profile>
}
