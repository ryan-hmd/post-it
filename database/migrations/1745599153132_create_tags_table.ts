import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'tags'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('name', 24).notNullable().unique()
            table.string('description').nullable()
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
