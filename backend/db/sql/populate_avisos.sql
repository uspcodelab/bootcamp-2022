INSERT INTO AVISOS_CATEGORIA (id, title, color)
VALUES (1, 'Impressora', 'orange');

INSERT INTO AVISOS_CATEGORIA (id, title)
VALUES (2, 'Padrão');

INSERT INTO AVISOS (title, icon, content, category_id)
VALUES ('Impressora', 'mdi-alien', 'Impressora não está funcionando no momento', 1);

INSERT INTO AVISOS (title, icon, content, category_id)
VALUES ('Feriado', 'mdi-robot-excited', 'Rede ficará indisponível durante o feriado para a realização de manutenção.', 2);

INSERT INTO AVISOS (title, icon, content, category_id)
VALUES ('Teste', 'mdi-linkedin', 'Lorem ipsum dolor sit amet', 2);

INSERT INTO AVISOS (title, icon, content, category_id)
VALUES ('Teste 2', 'mdi-facebook', 'Pão padaria padeiro', 2);
