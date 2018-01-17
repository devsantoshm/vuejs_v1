function findById(items, id){
	for(var i in items){
		if (items[i].id == id) {
			return items[i];
		}
	}
	return null;
}

Vue.component('select-category', {
	template: "#select_category_tpl",
	props: ['categories', 'id']
});

var vm = new Vue({
	el: 'body',
	data: {
		notes: [
			{
				note: 'Laravel lts',
				category_id: 1
			},
			{
				note: 'diretiva v-for en vue',
				category_id: 2
			},
			{
				note: 'seo organico',
				category_id: 3
			},
			{
				note: 'evento on click en vue',
				category_id: 2
			}
		],
		categories: [
			{
				id: 1,
				name: 'Laravle'
			},
			{
				id: 2,
				name: 'vue.js'
			},
			{
				id:3,
				name:'Prublicidad'
			}
		]
	},
	methods: {
		deleteNote: function(note){
			this.notes.$remove(note);
		},
		editNote: function(note){
			Vue.set(note, 'editing', true);
		},
		updateNote: function(note){
			note.editing = false;
		}
	},
	filters: {
		category: function (id){
			var category = findById(this.categories, id);
			return category != null ? category.name : 'Sin categoria';
		}
	}
});