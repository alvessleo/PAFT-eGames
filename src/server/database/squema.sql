-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------
-- Table `Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Usuario` ;

CREATE TABLE IF NOT EXISTS `Usuario` (
  `idUsuario` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
  `nome` TEXT NOT NULL,
  `username` TEXT NOT NULL,
  `biografia` LONGTEXT NULL,
  `data_nasc` DATE NOT NULL,
  `senha` TEXT NOT NULL,
  `jogo_favorito` TEXT NULL,
  `conquista` INTEGER NULL
);

-- -----------------------------------------------------
-- Table `grupo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `grupo` ;

CREATE TABLE IF NOT EXISTS `grupo` (
  `idgrupo` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
  `nome` TEXT NOT NULL,
  `foto` LONGTEXT NOT NULL,
  `status` TEXT NOT NULL,
  `descricao` LONGTEXT NOT NULL
);

-- -----------------------------------------------------
-- Table `Usuario_has_grupo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Usuario_has_grupo` ;

CREATE TABLE IF NOT EXISTS `Usuario_has_grupo` (
  `Usuario_idUsuario` INTEGER NOT NULL,
  `grupo_idgrupo` INTEGER NOT NULL,
  CONSTRAINT `fk_Usuario_has_grupo_Usuario`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_grupo_grupo1`
    FOREIGN KEY (`grupo_idgrupo`)
    REFERENCES `grupo` (`idgrupo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `logged`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `logged` ;

CREATE TABLE IF NOT EXISTS `logged` (
  `idSession` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
  `idUser` INTEGER NOT NULL,
  `login` BOOLEAN NOT NULL,
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUser`)
    REFERENCES `Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `post` ;

CREATE TABLE IF NOT EXISTS `post` (
  `idpost` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
  `tipo` INTEGER NOT NULL,
  `idUser` INTEGER NOT NULL,
  `foto` TEXT NOT NULL,
  `legenda` LONGTEXT NOT NULL,
  `data` DATETIME NOT NULL,
  `num_curtidas` INTEGER NULL,
  CONSTRAINT `idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- -----------------------------------------------------
-- Table `comentario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `comentario` ;

CREATE TABLE IF NOT EXISTS `comentario` (
  `idcomentario` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
  `idPost` INTEGER NOT NULL,
  `idUser` INTEGER NOT NULL,
  `texto` LONGTEXT NOT NULL,
  `data` DATETIME NOT NULL,
  CONSTRAINT `fk_idPost`
    FOREIGN KEY (`idPost`)
    REFERENCES `post` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);