-- Create database
create database automed;
use automed;


-- table auth
+----------+--------------+------+-----+---------+-------+
| Field    | Type         | Null | Key | Default | Extra |
+----------+--------------+------+-----+---------+-------+
| user_id  | varchar(255) | NO   | PRI | NULL    |       |
| position | varchar(255) | YES  |     | NULL    |       |
| password | varchar(255) | NO   |     | NULL    |       |
+----------+--------------+------+-----+---------+-------+

-- Create table auth
CREATE TABLE auth (
    user_id VARCHAR(255) PRIMARY KEY,
    position VARCHAR(255),
    password VARCHAR(255) NOT NULL
);

-- table patient
+----------------+-----------------+------+-----+---------+----------------+
| Field          | Type            | Null | Key | Default | Extra          |
+----------------+-----------------+------+-----+---------+----------------+
| patient_id     | int             | NO   | PRI | NULL    | auto_increment |
| patient_fname  | varchar(45)     | NO   |     | NULL    |                |
| patient_lname  | varchar(45)     | NO   |     | NULL    |                |
| blood_type     | varchar(10)     | YES  |     | NULL    |                |
| email          | varchar(45)     | YES  |     | NULL    |                |
| gender         | varchar(45)     | NO   |     | NULL    |                |
| age            | int             | NO   |     | NULL    |                |
| admission_date | date            | YES  |     | NULL    |                |
| discharge_date | varchar(45)     | YES  |     | NULL    |                |
| phone          | bigint unsigned | NO   |     | NULL    |                |
+----------------+-----------------+------+-----+---------+----------------+

-- Create table patient
CREATE TABLE ⁠ patient ⁠ (
  ⁠ patient_id ⁠ varchar(50) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  ⁠ patient_fname ⁠ varchar(45) NOT NULL,
  ⁠ patient_lname ⁠ varchar(45) NOT NULL,
  ⁠ blood_type ⁠ varchar(10) DEFAULT NULL,
  ⁠ email ⁠ varchar(45) DEFAULT NULL,
  ⁠ gender ⁠ varchar(45) NOT NULL,
  ⁠ age ⁠ int(5) NOT NULL,
  ⁠ admission_date ⁠ date DEFAULT NULL,
  ⁠ discharge_date ⁠ varchar(45) DEFAULT NULL,
  ⁠ phone ⁠ bigint unsigned NOT NULL,
  PRIMARY KEY (⁠ patient_id ⁠),
  UNIQUE KEY ⁠ patient_id_UNIQUE ⁠ (⁠ patient_id ⁠)
)
