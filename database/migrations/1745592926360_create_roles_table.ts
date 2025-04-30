import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'roles'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name', 16).unique()
            table.string('description').defaultTo(null)
            table.integer('level').unsigned().notNullable().defaultTo(0)
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
