
exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_situacao_avaliacao', table => {
    table.increments('co_situacao').primary()
    table.string('ds_situacao', 30).notNull()
})
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('avaliacao.tb_situacao_avaliacao')
};