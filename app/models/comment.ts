import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Postit from './postit.js'
import User from './user.js'
import Wall from './wall.js'

export default class Comment extends BaseModel {
    @column({ isPrimary: true })
    declare id: number

    @column()
    declare marked: boolean

    /**
     * Identifier of the thread (Post-it)
     */
    @column()
    declare threadId: number

    /**
     * Identifier of the parent comment (for nested responses)
     */
    @column()
    declare parentCommentId: number | null

    @column()
    declare authorId: number

    @column()
    declare content: string

    // We keep a track on Comment for moderation purpose
    @column()
    declare deleted: boolean

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

    @belongsTo(() => User, {
        foreignKey: 'authorId',
    })
    declare author: BelongsTo<typeof User>

    @belongsTo(() => Postit, {
        foreignKey: 'threadId'
    })
    declare thread: BelongsTo<typeof Postit>

    @hasMany(() => Comment, {
        foreignKey: 'parentCommentId'
    })
    declare replies: HasMany<typeof Comment>

    @belongsTo(() => Comment, {
        foreignKey: 'parentCommentId'
    })
    declare parentComment: BelongsTo<typeof Comment>

    @belongsTo(() => Wall)
    declare wall: BelongsTo<typeof Wall>
}
