create database Choppanheiros;

use Choppanheiros;

-- Criando as tabelas do banco de dados

create table Usuario (

idUsuario char(255) primary key,

name char(255),

email char(255),

password char(8)

);