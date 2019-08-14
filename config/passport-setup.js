const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users = require('../models/users');
const keys = require('./keys');

const CLIENT_ID = process.env.CLIENT_ID || keys.google.clientID
const CLIENT_SECRET = process.env.CLIENT_SECRET || keys.google.clientSecret

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
      console.log("got profile");
      var googleId = {'googleId': profile.id};
      Users.findOne(googleId).then((currentUser)=>{
        if(currentUser){
          console.log("user data");
          done(null, currentUser);
        }
        else{
          //create new user

          new Users({
            googleId: profile.id,
            username: profile.displayName,
            firstname: profile.name.givenName,
            surname: profile.name.familyName,
            thumbnail: profile.photos[0].value

          }).save().then((newUser) => {
            console.log('New user created: ' + newUser);
            done(null, newUser);
          });
        }
      });
    })
);
