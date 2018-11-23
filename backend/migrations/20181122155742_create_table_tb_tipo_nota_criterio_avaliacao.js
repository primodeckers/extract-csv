
exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_tipo_nota_criterio_avaliacao', table => {
        table.integer('co_tipo_nota').references('co_tipo_nota').inTable('avaliacao.tb_tipo_nota')
        table.integer('co_criterio').references('co_criterio').inTable('avaliacao.tb_criterio_avaliacao')
        table.primary(['co_tipo_nota','co_criterio'], 'pk_tipo_nota_criterio_avaliacao')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('avaliacao.tb_tipo_nota_criterio_avaliacao')
};
