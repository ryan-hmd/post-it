import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'walls'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('slug').notNullable().unique()
            table.string('name').notNullable().checkLength('>=', 3)
            table.string('description').nullable()
            table.integer('owner_id').unsigned().references('users.id').onDelete('SET NULL')
            table.timestamp('created_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
