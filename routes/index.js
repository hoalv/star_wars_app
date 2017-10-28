var moviesJSON = require('../movies.json');

var movies = moviesJSON.movies;

exports.home = function(req, res){
	res.render('home',{
		title : "Star Wars Movie",
		movies : movies
	});
};

exports.movie_single = function(req, res){
	var episode_number = req.params.episode_number; 
	if(episode_number >=1 && episode_number <= 6){
		var movie = movies[episode_number - 1];
		var title = movie.title;
		res.render('movie_single',{
			movies : movies,
			title : title,
			movie : movie
		});
	} else
	{
		res.send('This is not page you are looking for.');
	}
	

};

exports.notFound = function(req, res){
	res.send('This is not the page that you are looking for');
};