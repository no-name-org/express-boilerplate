# Express Boilerplate
A quick and simple ExpressJS boilerplate 

## Database Tables

### Todos
```
create table todos(
id int not null auto_increment,
title varchar(50) not null,
description varchar(50) not null,
done boolean default false not null,
created_by int,
assigned_to int,
created_at timedate NOT NULL DEFAULT CURRENT_TIMESTAMP,
primary key(id));
```

### Users
```
create table users(
id int not null auto_increment,
name varchar(50) not null,
username varchar(50) not null,
password varchar(50) not null,
email varchar(50) not null,
primary key (id));
```
