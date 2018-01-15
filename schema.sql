-- create a db
DROP DATABASE IF EXISTS togather_db;
CREATE DATABASE togather_db;

-- use the db
\connect togather_db;

-- create table / define schema
-- recreate tables, and populate manu.

CREATE TABLE users ( 
  id integer serial PRIMARY KEY,
  user_name text NOT NULL
);
 

CREATE TABLE events (
  id integer serial PRIMARY KEY,
  user_id integer REFERENCES users (id),
  event_name text
  -- description text,
  -- location text,
  -- event_date text,
  -- start_time text,
  -- end_time text,
  -- price text,
  -- name_yelp text,
  -- location_yelp text,
  -- image_url text
);

CREATE TABLE rsvp (
  user_id integer REFERENCES users(id),
  event_id integer REFERENCES events(id),
  rsvp text NOT NULL,
  PRIMARY KEY (user_id, event_id)
);

-- INSERT INTO events (id, user_id, event_name, description, location, event_date, start_time, end_time, price, name_yelp, location_yelp, image_url) VALUES (1, 2, 'BBQ','Family and friends gathering','123 myStreet','01/01/2017','03:30 PM','11:00 pm','free');

-- insert some dummy data
INSERT INTO users (user_name) VALUES ('Angel Hernandez');
INSERT INTO users (user_name) VALUES ('Lebron James');
INSERT INTO users (user_name) VALUES ('Steph Curry');
INSERT INTO users (user_name) VALUES ('Michael Jordan');
INSERT INTO users (user_name) VALUES ('Daphne Dang');
INSERT INTO users (user_name) VALUES ('Lara Dashut');
INSERT INTO users (user_name) VALUES ('Matt Mullen');


INSERT INTO events (id, user_id, event_name) VALUES (1, 2, 'BBQ');

-- INSERT INTO rsvp (user_id, event_id, rsvp) VALUES (1,2,'yes');
-- INSERT INTO rsvp (user_id, event_id, rsvp) VALUES (2,2,'yes');
-- INSERT INTO rsvp (user_id, event_id, rsvp) VALUES (3,2,'no');
-- INSERT INTO rsvp (user_id, event_id, rsvp) VALUES (4,2,'yes');
-- INSERT INTO rsvp (user_id, event_id, rsvp) VALUES (5,2,'maybe');
-- INSERT INTO rsvp (user_id, event_id, rsvp) VALUES (6,2,'yes');
-- INSERT INTO rsvp (user_id, event_id, rsvp) VALUES (7,2,'no');



/*  Execute t file from the command line by typing:
 *  psql postgres cyndaquils < schema.sql
 *  to create the database and the tables.*/
