

exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_criterio_avaliacao', table => {
        table.increments('co_criterio').primary()
        table.string('ds_criterio', 30)
        table.boolean('fl_permite_observacao').notNull().defaultTo(false)
      
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('avaliacao.tb_criterio_avaliacao')
};
