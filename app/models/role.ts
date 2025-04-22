import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Member from './member.js'
import User from './user.js'

export default class Role extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare name: string

    @column()
    declare description: string

    @hasMany(() => User)
    declare users: HasMany<typeof User>

    @hasMany(() => Member)
    declare members: HasMany<typeof Member>
}
