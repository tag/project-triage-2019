USE msis_triage;

CREATE TABLE Patient (
    patientGuid VARCHAR(64) PRIMARY KEY,
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    dob DATE DEFAULT NULL,
    sexAtBirth CHAR(1) DEFAULT ''
);

INSERT INTO Patient (patientGuid, firstName, lastName, dob, sexAtBirth) VALUES
("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950-00-00",  ""),
("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");

CREATE TABLE PatientVisit (
    visitId INTEGER PRIMARY KEY AUTO_INCREMENT,
    patientGuid VARCHAR(64) UNIQUE,
    visitDescription TEXT NOT NULL,
    visitDateUtc DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    priority ENUM('low', 'medium', 'high') NOT NULL DEFAULT 'low'

);

INSERT INTO PatientVisit (visitId, patientGuid, visitDescription) VALUES
(1, 'SOME-REALLY-LONG-1234', 'Anxiety from D&S');
