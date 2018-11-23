exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_avaliacao', table => {
    table.increments('id').primary()
    table.bigint('id_cidadao')
    table.bigint('id_orgao')
    table.bigint('id_servico').references('id_servico').inTable('avaliacao.tb_servicos')
    table.string('nu_protocolo', 30).notNull()
    table.string('ds_etapa', 30).notNull()
    table.integer('co_situacao').references('co_situacao').inTable('avaliacao.tb_situacao_avaliacao')
    table.timestamp('dt_avaliacao').defaultTo(knex.fn.now())
})
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('avaliacao.tb_avaliacao')
};