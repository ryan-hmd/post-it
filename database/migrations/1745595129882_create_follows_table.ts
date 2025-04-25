import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'follows'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer('follower_user_id').unsigned().references('users.id').onDelete('CASCADE')
            table.integer('followed_user_id').unsigned().references('users.id').onDelete('CASCADE')
            table.unique(['follower_user_id', 'followed_user_id'])
            table.timestamp('created_at')
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
