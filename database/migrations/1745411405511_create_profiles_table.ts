import { COUNTRIES } from '#shared/country'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'profiles'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
            table.string('first_name', 32).defaultTo(null)
            table.string('last_name', 32).defaultTo(null)
            table
                .string('country_code', 2)
                .checkIn([...COUNTRIES])
                .defaultTo(null)
            table.string('picture_url').defaultTo(null)
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
