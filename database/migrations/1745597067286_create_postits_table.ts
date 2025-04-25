import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'postits'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.boolean('pinned').defaultTo(false)
            table.integer('wall_id').unsigned().references('walls.id').onDelete('CASCADE')
            table.integer('author_id').unsigned().references('users.id').onDelete('SET NULL')
            table.string('slug').notNullable().unique()
            table.string('title').checkLength('>=', 12).notNullable()
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
