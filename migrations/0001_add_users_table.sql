-- Migration number: 0001 	 2024-04-09T20:34:28.353Z
drop table if exists users;

create table
    if not exists users (id integer PRIMARY KEY, name text, email text);