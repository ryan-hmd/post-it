import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, hasOne, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany, HasOne, ManyToMany } from '@adonisjs/lucid/types/relations'

import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import hash from '@adonisjs/core/services/hash'

import Notification from './notification.js'
import Profile from './profile.js'
import Follow from './follow.js'
import Report from './report.js'
import Postit from './postit.js'
import Role from './role.js'
import Wall from './wall.js'

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

    @belongsTo(() => Role)
    declare role: BelongsTo<typeof Role>

    @hasMany(() => Wall, {
        foreignKey: 'ownerId',
    })
    declare ownedWalls: HasMany<typeof Wall>

    @hasMany(() => Postit, {
        foreignKey: 'authorId',
    })
    declare posts: HasMany<typeof Postit>

    @hasMany(() => Notification)
    declare notifications: HasMany<typeof Notification>

    @hasMany(() => Follow, {
        foreignKey: 'followerUserId',
    })
    declare followers: HasMany<typeof Follow>

    @hasMany(() => Follow, {
        foreignKey: 'followedUserId',
    })
    declare followed: HasMany<typeof Follow>

    @hasMany(() => Report, {
        foreignKey: 'reporterId',
    })
    declare reports: HasMany<typeof Report>

    @hasMany(() => Report, {
        foreignKey: 'moderatorId',
    })
    declare tickets: HasMany<typeof Report>

    @manyToMany(() => Wall, {
        pivotTable: 'walls_members',
        pivotColumns: ['local_role_id'],
        pivotTimestamps: {
            createdAt: 'created_at',
            updatedAt: false,
        },
    })
    declare joinedWalls: ManyToMany<typeof Wall>
}
