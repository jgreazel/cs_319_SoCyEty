USE g23;

DROP TABLE IF EXISTS question;

CREATE TABLE question(
    id                  int unique not null auto_increment,
    questionBody        varchar(255) not null,
    questionAuthor      varchar(225) default null,
    dateAsked           datetime default null,
    PRIMARY KEY(id)
);