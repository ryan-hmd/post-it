import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'members'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
            table.integer('wall_id').unsigned().references('walls.id').onDelete('CASCADE')
            table.integer('role_id').unsigned().references('roles.id').onDelete('SET NULL')
            table.timestamp('created_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
