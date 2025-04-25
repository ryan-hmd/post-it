import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'comments'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.boolean('marked').defaultTo(false)
            table.integer('thread_id').unsigned().references('postits.id').onDelete('CASCADE')
            table
                .integer('parent_comment_id')
                .unsigned()
                .references('comments.id')
                .onDelete('CASCADE')
            table.integer('author_id').unsigned().references('users.id').onDelete('SET NULL')
            table.string('content').checkLength('>=', 24).notNullable()
            table.boolean('deleted').defaultTo(false)
            table.timestamp('created_at')
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
