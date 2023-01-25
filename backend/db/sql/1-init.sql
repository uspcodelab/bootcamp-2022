DROP TABLE IF EXISTS USUARIOS CASCADE;
DROP TABLE IF EXISTS AVISOS_CATEGORIA CASCADE;
DROP TABLE IF EXISTS AVISOS CASCADE;
DROP TABLE IF EXISTS SLIDES CASCADE;
DROP TABLE IF EXISTS SLIDES_BOTOES CASCADE;
DROP TABLE IF EXISTS STATUS CASCADE;
DROP TABLE IF EXISTS NOTICIAS CASCADE;
DROP TABLE IF EXISTS FAQ CASCADE;
DROP TABLE IF EXISTS HORARIOS CASCADE;

CREATE TABLE QUOTE (
    id SERIAL PRIMARY KEY,
    quote character varying(255) NOT NULL UNIQUE,
    author character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE USUARIOS (
  id SERIAL PRIMARY KEY,
  username character varying(255) NOT NULL UNIQUE,
  name character varying(255) NOT NULL,
  password character varying(255) NOT NULL,
  mail character varying(255) NOT NULL UNIQUE,
  shell character varying(255) DEFAULT '/bin/bash' NOT NULL,
  user_group character varying(255) NOT NULL,
  ssh_access boolean DEFAULT TRUE NOT NULL,
  link_type character varying(255) NOT NULL,
  institute character varying(255) NOT NULL,
  last_login timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
  description character varying(255) DEFAULT 'Usuario',
  role character varying(255) DEFAULT 'user' NOT NULL
);

CREATE TABLE AVISOS_CATEGORIA (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL,
  color character varying(255) DEFAULT 'gray' NOT NULL
);

CREATE TABLE AVISOS (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL,
  icon character varying(255) NOT NULL,
  content text NOT NULL,
  category_id INTEGER NOT NULL,

	CONSTRAINT aviso_categoria_ct FOREIGN KEY (category_id)
		REFERENCES AVISOS_CATEGORIA (id)

);

CREATE TABLE SLIDES (
  id SERIAL PRIMARY KEY,
  small_intro character varying(255) NOT NULL,
  main_text character varying(255) NOT NULL
);

CREATE TABLE SLIDES_BOTOES (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL,
  link character varying(523) NOT NULL,
  color character varying(255) NOT NULL,
  slide_id INTEGER NOT NULL,

	CONSTRAINT botao_slide_ct FOREIGN KEY (slide_id)
		REFERENCES SLIDES (id)

);

CREATE TABLE STATUS (
  id SERIAL PRIMARY KEY,
  machine character varying(255) NOT NULL UNIQUE,
  status boolean NOT NULL
);

CREATE TABLE NOTICIAS (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL,
  subtitle character varying(523) NOT NULL,
  content text NOT NULL,
  author_id INTEGER NOT NULL,

	CONSTRAINT noticia_author_ct FOREIGN KEY (author_id)
		REFERENCES USUARIOS (id)
);

CREATE TABLE FAQ (
  id SERIAL PRIMARY KEY,
  question character varying(523) NOT NULL,
  answer text NOT NULL
);

CREATE TABLE HORARIOS (
  id SERIAL PRIMARY KEY,
  weekday character varying(255) NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  admin_id INTEGER NOT NULL,

	CONSTRAINT fk_admin 
    FOREIGN KEY(admin_id)
		  REFERENCES USUARIOS(id)
);
