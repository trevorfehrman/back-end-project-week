exports.up = function(knex, Promise) {
	return knex.schema.createTable("notes", notes => {
		notes.increments();
		notes.string("title", 128).notNullable();
		notes.string("textBody", 2000);
		notes
			.integer("user_id")
			.unsigned()
			.notNullable()
			.references("users.id");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists("notes");
};
