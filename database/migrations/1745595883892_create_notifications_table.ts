import { NOTIFS } from '#shared/notification'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'notifications'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
            table.string('href').defaultTo(null)
            table
                .string('status')
                .checkIn([...NOTIFS])
                .defaultTo(null)
            table.string('title', 64).notNullable()
            table.string('description').defaultTo(null)
            table.boolean('opened').defaultTo(false)
            table.timestamp('created_at')
            table.timestamp('opened_at').defaultTo(null)
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
