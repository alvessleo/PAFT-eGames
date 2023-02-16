-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eGames
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eGames` DEFAULT CHARACTER SET utf8 ;
USE `eGames` ;

-- -----------------------------------------------------
-- Table `eGames`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eGames`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `eGames`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `biografia` LONGTEXT NULL,
  `data_nasc` DATE NULL,
  `senha` VARCHAR(120) NULL,
  `jogo_favorito` VARCHAR(45) NULL,
  `conquista` INT NULL,
  UNIQUE INDEX `idUsuario_UNIQUE` (`idUsuario` ASC) VISIBLE,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `eGames`.`grupo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eGames`.`grupo` ;

CREATE TABLE IF NOT EXISTS `eGames`.`grupo` (
  `idgrupo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `foto` LONGTEXT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `descricao` LONGTEXT NOT NULL,
  PRIMARY KEY (`idgrupo`),
  UNIQUE INDEX `idgrupo_UNIQUE` (`idgrupo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eGames`.`Usuario_has_grupo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eGames`.`Usuario_has_grupo` ;

CREATE TABLE IF NOT EXISTS `eGames`.`Usuario_has_grupo` (
  `Usuario_idUsuario` INT NOT NULL,
  `grupo_idgrupo` INT NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`, `grupo_idgrupo`),
  INDEX `fk_Usuario_has_grupo_grupo1_idx` (`grupo_idgrupo` ASC) VISIBLE,
  INDEX `fk_Usuario_has_grupo_Usuario_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_has_grupo_Usuario`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `eGames`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_grupo_grupo1`
    FOREIGN KEY (`grupo_idgrupo`)
    REFERENCES `eGames`.`grupo` (`idgrupo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `eGames`.`logged`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eGames`.`logged` ;

CREATE TABLE IF NOT EXISTS `eGames`.`logged` (
  `idSession` INT NOT NULL AUTO_INCREMENT,
  `idUser` INT NOT NULL,
  `login` TINYINT NOT NULL,
  PRIMARY KEY (`idSession`),
  UNIQUE INDEX `idSession_UNIQUE` (`idSession` ASC) VISIBLE,
  INDEX `idUsuario_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUser`)
    REFERENCES `eGames`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `eGames`.`post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eGames`.`post` ;

CREATE TABLE IF NOT EXISTS `eGames`.`post` (
  `idpost` INT NOT NULL AUTO_INCREMENT,
  `tipo` INT NOT NULL,
  `idUser` INT NOT NULL,
  `foto` VARCHAR(80) NOT NULL,
  `legenda` LONGTEXT NOT NULL,
  `data` DATETIME NOT NULL,
  `num_curtidas` INT NULL,
  PRIMARY KEY (`idpost`),
  INDEX `idUser_idx` (`idUser` ASC) VISIBLE,
  UNIQUE INDEX `idpost_UNIQUE` (`idpost` ASC) VISIBLE,
  CONSTRAINT `idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `eGames`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `eGames`.`comentario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `eGames`.`comentario` ;

CREATE TABLE IF NOT EXISTS `eGames`.`comentario` (
  `idcomentario` INT NOT NULL AUTO_INCREMENT,
  `idPost` INT NOT NULL,
  `idUser` INT NOT NULL,
  `texto` LONGTEXT NOT NULL,
  `data` DATETIME NOT NULL,
  PRIMARY KEY (`idcomentario`),
  INDEX `fk_idPost_idx` (`idPost` ASC) VISIBLE,
  UNIQUE INDEX `idcomentario_UNIQUE` (`idcomentario` ASC) VISIBLE,
  INDEX `fk_idUser_idx` (`idUser` ASC) VISIBLE,
  CONSTRAINT `fk_idPost`
    FOREIGN KEY (`idPost`)
    REFERENCES `eGames`.`post` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `eGames`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;