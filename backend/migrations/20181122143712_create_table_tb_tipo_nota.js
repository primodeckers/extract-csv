exports.up = function(knex, Promise) {
    return knex.schema.createTable('avaliacao.tb_tipo_nota', table => {
        table.increments('co_tipo_nota').primary()
        table.string('ds_nota', 30)
        table.boolean('fl_integra_eouv').notNull().defaultTo(false)   
        table.boolean('fl_elogio_eouv').notNull().defaultTo(false)     
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('avaliacao.tb_tipo_nota')
};
