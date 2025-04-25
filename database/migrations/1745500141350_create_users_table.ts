import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'users'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('nickname', 24).notNullable()
            table.string('email').notNullable()
            table.unique(['nickname', 'email'])
            table.string('password').notNullable()
            table.integer('roleId').unsigned().references('roles.id').onDelete('CASCADE')
            table.timestamp('created_at')
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
