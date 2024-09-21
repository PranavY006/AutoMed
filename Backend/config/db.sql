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

-- Create table patient_table
CREATE TABLE patient_personal_info (
  patient_id bigint(15) PRIMARY KEY AUTO_INCREMENT,
  patient_fname varchar(45) NOT NULL,
  patient_lname varchar(45) NOT NULL,
  patient_mname varchar(25) NOT NULL,
  gender int(11) NOT NULL,
  birthday date NOT NULL,
  address1 text NOT NULL,
  address2 text NOT NULL,
  age int(5) NOT NULL,
  mobile_no_1 varchar(25) NOT NULL,
  mobile_no_2 varchar(25) NOT NULL,
  email_address varchar(50) NOT NULL,
  picture varchar(100) NOT NULL,
  date_entry datetime NOT NULL,
  blood_group int(11) NOT NULL,
  Insurance_comp int(11) NOT NULL,
  insurance_no varchar(25) NOT NULL,
  id_identifiers text NOT NULL,
  InActive int(11) NOT NULL
);

+----------------+--------------+------+-----+---------+----------------+
| Field          | Type         | Null | Key | Default | Extra          |
+----------------+--------------+------+-----+---------+----------------+
| patient_id     | bigint       | NO   | PRI | NULL    | auto_increment |
| patient_fname  | varchar(45)  | NO   |     | NULL    |                |
| patient_lname  | varchar(45)  | NO   |     | NULL    |                |
| patient_mname  | varchar(25)  | NO   |     | NULL    |                |
| gender         | int          | NO   |     | NULL    |                |
| birthday       | date         | NO   |     | NULL    |                |
| address1       | text         | NO   |     | NULL    |                |
| address2       | text         | NO   |     | NULL    |                |
| age            | int          | NO   |     | NULL    |                |
| mobile_no_1    | varchar(25)  | NO   |     | NULL    |                |
| mobile_no_2    | varchar(25)  | NO   |     | NULL    |                |
| email_address  | varchar(50)  | NO   |     | NULL    |                |
| picture        | varchar(100) | NO   |     | NULL    |                |
| date_entry     | datetime     | NO   |     | NULL    |                |
| blood_group    | int          | NO   |     | NULL    |                |
| Insurance_comp | int          | NO   |     | NULL    |                |
| insurance_no   | varchar(25)  | NO   |     | NULL    |                |
| id_identifiers | text         | NO   |     | NULL    |                |
| InActive       | int          | NO   |     | NULL    |                |
+----------------+--------------+------+-----+---------+----------------+