-- create a db
DROP DATABASE IF EXISTS togather_db;
CREATE DATABASE togather_db;

-- use the db
\connect togather_db;

-- create table / define schema
-- recreate tables, and populate manu.

CREATE TABLE users ( 
  id SERIAL PRIMARY KEY,
  user_name text NOT NULL
);
 

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_name text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  event_date text NOT NULL,
  start_time text NOT NULL,
  end_time time NOT NULL,
  price text NOT NULL,
  user_id int REFERENCES users(id)
);

CREATE TABLE rsvp (
  id SERIAL PRIMARY KEY,
  users_id int REFERENCES users(id),
  events_id int REFERENCES events(id),
  rsvp text NOT NULL
);

INSERT INTO events (event_name, description,
  location, event_date, start_time, end_time, price, user_id ) VALUES ('BBQ','Family and friends gathering','123 myStreet','01/01/2017','03:30 PM','11:00 pm','free',1);


-- insert some dummy data
INSERT INTO users (user_name) VALUES ('Angel Hernandez');
INSERT INTO users (user_name) VALUES ('Lebron James');
INSERT INTO users (user_name) VALUES ('Steph Curry');
INSERT INTO users (user_name) VALUES ('Michael Jordan');
INSERT INTO users (user_name) VALUES ('Daphne Dang');
INSERT INTO users (user_name) VALUES ('Lara Dashut');
INSERT INTO users (user_name) VALUES ('Matt Mullen');


INSERT INTO rsvp (users_id, events_id, rsvp) VALUES (1,2,'yes');
INSERT INTO rsvp (users_id, events_id, rsvp) VALUES (2,2,'yes');
INSERT INTO rsvp (users_id, events_id, rsvp) VALUES (3,2,'no');
INSERT INTO rsvp (users_id, events_id, rsvp) VALUES (4,2,'yes');
INSERT INTO rsvp (users_id, events_id, rsvp) VALUES (5,2,'maybe');
INSERT INTO rsvp (users_id, events_id, rsvp) VALUES (6,2,'yes');
INSERT INTO rsvp (users_id, events_id, rsvp) VALUES (7,2,'no');


/*  Execute t file from the command line by typing:
 *  psql postgres cyndaquils < schema.sql
 *  to create the database and the tables.*/
