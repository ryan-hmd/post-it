import { REPORT_STATUS, REPORT_TARGETS, REPORT_REASONS } from '#shared/report'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'reports'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('reporter_id').unsigned().references('users.id').onDelete('CASCADE')
            table
                .string('target_type')
                .checkIn([...REPORT_TARGETS])
                .notNullable()
            table.integer('target_id').unsigned()
            table
                .string('reason')
                .checkIn([...REPORT_REASONS])
                .notNullable()
            table.string('description').notNullable()
            table
                .string('status')
                .checkIn([...REPORT_STATUS])
                .defaultTo('pending')
            table.integer('moderator_id').unsigned().references('users.id').onDelete('SET NULL')
            table.timestamp('created_at')
            table.timestamp('updated_at')
            table.unique(['reporter_id', 'target_id', 'reason'])
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
