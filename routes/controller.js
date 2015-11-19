

module.exports = function (app) {

	app.get('/stats/:name?', function (req, res, next) {

    console.log('Got request: ' + req.path);
		var name = req.params.name;

		var sorter = function(objectToSort){
			var sortable = [];
			for (var key in objectToSort) {
				var value = objectToSort[key];
//				if (typeof value === 'string' || value instanceof String) {
					sortable.push([key, value]);
//				} else {
//					sortable.push([key, sorter(value) + 'OBJECT XX']);
//				}
			}
			sortable.sort(function(a, b) {
				var nameA=a[0], nameB=b[0];
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			});
			return sortable;
		};

		res.render('stats', {
			name: name,
			everything: process.env,
			properties: sorter(process.env)
		});

	});

	app.get('/*', function (req, res) {
    console.log('Got request: ' + req.path);
		res.render('index');
	});

};
