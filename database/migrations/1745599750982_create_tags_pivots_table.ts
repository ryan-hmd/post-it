import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'tags_pivots'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('tag_id').unsigned().references('tags.id').onDelete('CASCADE')
            table
                .integer('wall_id')
                .unsigned()
                .references('walls.id')
                .onDelete('CASCADE')
                .defaultTo(null)
            table
                .integer('postit_id')
                .unsigned()
                .references('postits.id')
                .onDelete('CASCADE')
                .defaultTo(null)
            table.integer('weight').defaultTo(1).notNullable()
            // unicity constraint for tags
            table.unique(['tag_id', 'wall_id', 'postit_id'])
            // constraint on FK : only one should be define
            table.check(
                `(("wall_id" IS NOT NULL AND "postit_id" IS NULL) OR ("wall_id" IS NULL AND "postit_id" IS NOT NULL))`
            )
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
