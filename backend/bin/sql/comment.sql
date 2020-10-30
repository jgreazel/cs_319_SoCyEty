USE g23;

DROP TABLE IF EXISTS comment;

CREATE TABLE comment(
    id                  int unique not null auto_increment,
    commentAuthor       varchar(225) default null,
    commentBody         varchar(225) not null,
    dateCommented       datetime default null,
    solutionId          int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(solutionId) references solution(id)
);