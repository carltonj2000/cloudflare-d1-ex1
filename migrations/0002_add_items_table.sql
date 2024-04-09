-- Migration number: 0002 	 2024-04-09T20:35:40.873Z
drop table if exists items;

create table
    if not exists items (name text);