DROP TABLE IF EXISTS USERS CASCADE;
DROP TABLE IF EXISTS WARNING_CLASSES CASCADE;
DROP TABLE IF EXISTS WARNINGS CASCADE;
DROP TABLE IF EXISTS SLIDES CASCADE;
DROP TABLE IF EXISTS SLIDES_BUTTONS CASCADE;
DROP TABLE IF EXISTS STATUS CASCADE;
DROP TABLE IF EXISTS NEWS CASCADE;
DROP TABLE IF EXISTS FAQ CASCADE;
DROP TABLE IF EXISTS SCHEDULES CASCADE;

CREATE TABLE QUOTES (
    id SERIAL PRIMARY KEY,
    content character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE USERS (
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

CREATE TABLE WARNING_CLASSES (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL UNIQUE,
  color character varying(255) DEFAULT 'gray' NOT NULL
);

CREATE TABLE WARNINGS (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL,
  icon character varying(255) NOT NULL,
  content text NOT NULL,
  class_id INTEGER NOT NULL,

	CONSTRAINT fk_class FOREIGN KEY (class_id)
		REFERENCES WARNING_CLASSES (id) ON DELETE CASCADE

);

CREATE TABLE SLIDES (
  id SERIAL PRIMARY KEY,
  small_intro character varying(255) NOT NULL,
  main_text character varying(255) NOT NULL
);

CREATE TABLE SLIDE_BUTTONS (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL,
  link character varying(523) NOT NULL,
  color character varying(255) NOT NULL,
  slide_id INTEGER NOT NULL,

	CONSTRAINT slide_fk FOREIGN KEY (slide_id)
		REFERENCES SLIDES (id) ON DELETE CASCADE

);

CREATE TABLE MACHINES (
  id SERIAL PRIMARY KEY,
  name character varying(255) NOT NULL UNIQUE,
  status boolean NOT NULL
);

CREATE TABLE NEWS (
  id SERIAL PRIMARY KEY,
  title character varying(255) NOT NULL,
  subtitle character varying(523) NOT NULL,
  content text NOT NULL,
  author_id INTEGER NOT NULL,

	CONSTRAINT noticia_author_ct FOREIGN KEY (author_id)
		REFERENCES USERS (id) ON DELETE CASCADE
);

CREATE TABLE FAQ (
  id SERIAL PRIMARY KEY,
  question character varying(523) NOT NULL,
  answer text NOT NULL
);

CREATE TABLE SCHEDULES (
  id SERIAL PRIMARY KEY,
  weekday character varying(255) NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  admin_id INTEGER NOT NULL,

	CONSTRAINT fk_admin 
    FOREIGN KEY(admin_id)
		  REFERENCES USERS (id) ON DELETE CASCADE
);

