import { reportReason, reportStatus, reportTargets } from '#enums/report'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'reports'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('reporter_id').unsigned().references('users.id').onDelete('CASCADE')
            table.enum('target_type', reportTargets).notNullable()
            table.integer('target_id').unsigned()
            table.unique(['reporter_id', 'target_id'])
            table.enum('reason', reportReason).notNullable()
            table.string('description').notNullable()
            table.enum('status', reportStatus).defaultTo('PENDING')
            table.integer('moderator_id').unsigned().references('users.id').onDelete('SET NULL')
            table.timestamp('created_at')
            table.timestamp('updated_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
