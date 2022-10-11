CREATE DATABASE score_counter;
-- users table 
create table users(
  user_id serial primary key,
  user_name varchar(255) unique not null,
  user_wins  NUMERIC
);
-- rounds tabel
create table rounds(
  round_id serial primary key,
  round_scor NUMERIC
);
-- games tabel
create table games(
  game_id serial primary key,
  game_wins NUMERIC
);