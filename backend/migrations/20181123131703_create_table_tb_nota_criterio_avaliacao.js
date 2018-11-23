exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_nota_criterio_avaliacao', table => {
        table.integer('id_nota').references('id').inTable('avaliacao.tb_nota')
        table.integer('co_criterio').references('co_criterio').inTable('avaliacao.tb_criterio_avaliacao')
        table.primary(['id_nota','co_criterio'], 'pk_nota_criterio_avaliacao')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('avaliacao.tb_nota_criterio_avaliacao')
};
