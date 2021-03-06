exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("tags")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("tags").insert([
				{ tag: "alpha tag", note_id: 1 },
				{ tag: "alpha tag", note_id: 2 },
				{ tag: "beta tag", note_id: 2 },
				{ tag: "beta tag", note_id: 3 },
				{ tag: "gamma tag", note_id: 3 },
				{ tag: "gamma tag", note_id: 1 },
			]);
		});
};
