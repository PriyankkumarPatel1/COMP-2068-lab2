const Movie = require('../models/movie');

exports.index = (req, res) => {

  Movie.find({
    })
    .then(movies => {
      res.render('movies/index', {
        movies: movies,
        title: 'Archive'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.releaseds = (req, res) => {
  

  Movie.find({
    }).releaseds()
    .then(movies => {
      res.render('movies/index', {
        movies: movies,
        title: 'Released'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.upcoming = (req, res) => {
 

  Movie.find({

    }).upcoming()
    .then(movies => {
      res.render('movies/index', {
        movies: movies,
        title: 'Upcoming'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.show = (req, res) => {
  

  Movie.findOne({
      _id: req.params.id,
    })
    .then(movie => {
      res.render('movies/show', {
        movie: movie,
        title: movie.title
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.new = (req, res) => {
  

  res.render('movies/new', {
    title: 'New Movie Post'
  });
};

exports.edit = (req, res) => {
 

  Movie.findOne({
      _id: req.params.id,
    })
    .then(movie => {
      res.render('movies/edit', {
        movie: movie,
        title: movie.title
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.create = (req, res) => {
  

  Movie.create(req.body.movie)
    .then(() => {
      req.flash('success', 'New movie was created successfully.');
      res.redirect('/movies');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/movies/new');
    });
};

exports.update = (req, res) => {
  

  Movie.updateOne({
      _id: req.body.id,
    }, req.body.movie, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'The movie was updated successfully.');
      res.redirect(`/movies/${req.body.id}`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/movies/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  

  Movie.deleteOne({
      _id: req.body.id,
    })
    .then(() => {
      req.flash('success', 'The movie was deleted successfully.');
      res.redirect('/movies');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/movies`);
    });
};