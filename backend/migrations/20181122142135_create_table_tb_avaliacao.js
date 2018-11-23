exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_avaliacao', table => {
    table.increments('id').primary()
    table.bigint('id_cidadao')
    table.bigint('id_orgao').references('id_orgao').inTable('avaliacao.tb_servicos').nullable()
    table.bigint('id_servico')
    table.string('nu_protocolo', 30).notNull()
    table.string('ds_etapa', 30).notNull()
    table.integer('co_situacao').references('co_situacao').inTable('avaliacao.tb_situacao_avaliacao')
    table.timestamp('dt_avaliacao').defaultTo(knex.fn.now())
})
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('avaliacao.tb_avaliacao')
};