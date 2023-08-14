-- MySQL dump 10.13  Distrib 8.0.32, for macos12.6 (arm64)
--
-- Host: localhost    Database: greenpartner
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `semai`
--

DROP TABLE IF EXISTS `semai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semai` (
  `nomor` int NOT NULL AUTO_INCREMENT,
  `nama_spesies` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `jumlah_ind` int NOT NULL,
  `plot` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`nomor`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semai`
--

LOCK TABLES `semai` WRITE;
/*!40000 ALTER TABLE `semai` DISABLE KEYS */;
INSERT INTO `semai` VALUES (1,'Macaranga denticulata (BI,) M, A, (Mara)',1,1,NULL,NULL),(2,'Parkia speciosa Hassk',1,2,NULL,NULL),(3,'Melia azedarach L, (Mindi)',2,6,NULL,NULL),(4,'Cassia spectabilis',5,7,NULL,NULL),(5,'Bouea gandaria BI,',1,8,NULL,NULL),(6,'Samanea saman',1,20,NULL,NULL),(7,'Swietenia macrophylla',1,21,NULL,NULL),(8,'Ochroma pyramidale',1,25,NULL,NULL),(9,'Swietenia macrophylla',4,27,NULL,NULL),(10,'Cassia spectabilis',132,30,NULL,NULL),(11,'Manglietia glauca',2,30,NULL,NULL),(12,'Adenanthera pavonia',2,34,NULL,NULL),(13,'Leucaena leucochepala',9,35,NULL,NULL),(14,'Leucaena leucochepala',4,39,NULL,NULL),(15,'Swietenia macrophylla',1,42,NULL,NULL);
/*!40000 ALTER TABLE `semai` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-13  2:56:38
