USE g23;

DROP TABLE IF EXISTS solution;

CREATE TABLE solution(
    id                  int unique not null auto_increment,
    solutionAuthor      varchar(225) default null,
    solutionBody        varchar(225) not null,
    datePosted          datetime default null,
    questionId          int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(questionId) references question(id) ON DELETE CASCADE
);