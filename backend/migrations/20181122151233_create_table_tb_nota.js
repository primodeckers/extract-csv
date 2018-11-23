
exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_nota', table => {
        table.integer('id').references('id').inTable('avaliacao.tb_avaliacao')
        table.integer('co_tipo_nota').references('co_tipo_nota').inTable('avaliacao.tb_tipo_nota')
		table.string('ds_nota', 30)
        table.string('ds_outro_criterio', 30)
        table.boolean('fl_avaliacao_anonima').notNull().defaultTo(false)
        table.timestamp('dt_nota').defaultTo(knex.fn.now())
        table.primary('id', 'pk_nota')
 
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('avaliacao.tb_nota')
};
