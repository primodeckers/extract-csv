
exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_servicos', table => {
        table.increments('id_servico').primary()
        table.integer('id_orgao')
        table.string('nome_orgao')
        table.string('servico')
        table.boolean('servico_digital').notNull().defaultTo(false) 
        table.integer('avaliacoes_negativas')
        table.integer('avaliacoes_positivas')
        table.integer('porcentagem_digital')
         
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('avaliacao.tb_servicos')
};