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
-- Table structure for table `pancang`
--

DROP TABLE IF EXISTS `pancang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pancang` (
  `nomor_pohon` int NOT NULL AUTO_INCREMENT,
  `nama_spesies` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `keliling` decimal(5,1) NOT NULL,
  `plot` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `luas` float DEFAULT NULL,
  PRIMARY KEY (`nomor_pohon`)
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pancang`
--

LOCK TABLES `pancang` WRITE;
/*!40000 ALTER TABLE `pancang` DISABLE KEYS */;
INSERT INTO `pancang` (`nomor_pohon`, `nama_spesies`, `keliling`, `plot`, `createdAt`, `updatedAt`, `luas`) VALUES (1, 'Lagerstromeia speciosa', 22, 1, '', '', 38.53503185),
 (2, 'Lagerstromeia speciosa', 14.5, 1, '', '', 16.73964968),
 (3, 'Lagerstromeia speciosa', 13, 1, '', '', 13.45541401),
 (4, 'Lagerstromeia speciosa', 12, 1, '', '', 11.46496815),
 (5, 'Lagerstromeia speciosa', 8.5, 1, '', '', 5.752388535),
 (6, 'Lagerstromeia speciosa', 11, 1, '', '', 9.633757962),
 (7, 'Lagerstromeia speciosa', 27, 2, '', '', 58.04140127),
 (8, 'Lagerstromeia speciosa', 14, 2, '', '', 15.60509554),
 (9, 'Lagerstromeia speciosa', 17, 2, '', '', 23.00955414),
 (10, 'Lagerstromeia speciosa', 14, 2, '', '', 15.60509554),
 (11, 'Swietenia macrophylla', 27, 3, '', '', 58.04140127),
 (12, 'Sterculia foetida', 27, 3, '', '', 58.04140127),
 (13, 'Dalbergia latifolia', 16.5, 4, '', '', 21.67595541),
 (14, 'Dalbergia latifolia', 22, 4, '', '', 38.53503185),
 (15, 'Dalbergia latifolia', 13, 4, '', '', 13.45541401),
 (16, 'Alstonia scholaris (Pulai)', 14, 4, '', '', 15.60509554),
 (17, 'Alstonia scholaris (Pulai)', 20, 4, '', '', 31.84713376),
 (18, 'Alstonia scholaris (Pulai)', 11, 4, '', '', 9.633757962),
 (19, 'Sterculia oblongata', 20, 4, '', '', 31.84713376),
 (20, 'Sterculia oblongata', 18, 4, '', '', 25.79617834),
 (21, 'Cinnamomum sintok', 9, 5, '', '', 6.449044586),
 (22, 'Cinnamomum sintok', 13, 5, '', '', 13.45541401),
 (23, 'Manglietia glauca', 15, 5, '', '', 17.91401274),
 (24, 'Macaranga denticulata', 30, 6, '', '', 71.65605096),
 (25, 'Persea americana Mill,', 29, 6, '', '', 66.95859873),
 (26, 'Manglietia glauca', 16, 7, '', '', 20.38216561),
 (27, 'Manglietia glauca', 13.5, 7, '', '', 14.51035032),
 (28, 'Manglietia glauca', 8, 7, '', '', 5.095541401),
 (29, 'Macaranga denticulata', 6, 7, '', '', 2.866242038),
 (30, 'Cinnamomum sintok', 7.5, 7, '', '', 4.478503185),
 (31, 'Cinnamomum sintok', 8.5, 7, '', '', 5.752388535),
 (32, 'Cinnamomum sintok', 9, 7, '', '', 6.449044586),
 (33, 'Persea americana Mill,', 15, 8, '', '', 17.91401274),
 (34, 'Persea americana Mill,', 18.5, 8, '', '', 27.24920382),
 (35, 'Persea americana Mill,', 12, 8, '', '', 11.46496815),
 (36, 'Sterculia foetida', 24, 8, '', '', 45.85987261),
 (37, 'Mangifera indica L,', 18, 8, '', '', 25.79617834),
 (38, 'Mangifera indica L,', 5, 8, '', '', 1.99044586),
 (39, 'Cinnamomum sintok', 24.5, 8, '', '', 47.7906051),
 (40, 'Cinnamomum sintok', 17, 8, '', '', 23.00955414),
 (41, 'Cinnamomum sintok', 18, 8, '', '', 25.79617834),
 (42, 'Pterocarpus indicus', 17.5, 9, '', '', 24.38296178),
 (43, 'Pterocarpus indicus', 23, 9, '', '', 42.11783439),
 (44, 'Pterocarpus indicus', 14.5, 9, '', '', 16.73964968),
 (45, 'Manglietia glauca', 26, 9, '', '', 53.82165605),
 (46, 'Hibiscus tiliaceus L,', 27.5, 9, '', '', 60.21098726),
 (47, 'Malothus paniculatus', 11.5, 10, '', '', 10.5294586),
 (48, 'Artocarpus heterophyllus', 11, 10, '', '', 9.633757962),
 (49, 'Sapindus rarak (Lerek)', 6, 11, '', '', 2.866242038),
 (50, 'Sapindus rarak (Lerek)', 5, 11, '', '', 1.99044586),
 (51, 'Sapindus rarak (Lerek)', 8, 11, '', '', 5.095541401),
 (52, 'Sapindus rarak (Lerek)', 5, 11, '', '', 1.99044586),
 (53, 'Lagerstromeia speciosa', 7, 11, '', '', 3.901273885),
 (54, 'Lagerstromeia speciosa', 3.5, 11, '', '', 0.975318471),
 (55, 'Lagerstromeia speciosa', 4, 11, '', '', 1.27388535),
 (56, 'Malothus paniculatus', 14.5, 11, '', '', 16.73964968),
 (57, 'Lagerstromeia speciosa', 17, 12, '', '', 23.00955414),
 (58, 'Lagerstromeia speciosa', 16, 12, '', '', 20.38216561),
 (59, 'Manglietia glauca', 24, 12, '', '', 45.85987261),
 (60, 'Manglietia glauca', 18, 12, '', '', 25.79617834),
 (61, 'Phyllanthus emblica L,', 26, 12, '', '', 53.82165605),
 (62, 'Phyllanthus emblica L,', 27, 12, '', '', 58.04140127),
 (63, 'Phyllanthus emblica L,', 30, 12, '', '', 71.65605096),
 (64, 'Lagerstromeia speciosa', 19, 12, '', '', 28.74203822),
 (65, 'Lagerstromeia speciosa', 17, 12, '', '', 23.00955414),
 (66, 'Lagerstromeia speciosa', 21, 12, '', '', 35.11146497),
 (67, 'Manglietia glauca', 24.5, 13, '', '', 47.7906051),
 (68, 'Macaranga denticulata', 21, 13, '', '', 35.11146497),
 (69, 'Canarium indicum L,', 26.5, 13, '', '', 55.9116242),
 (70, 'Terminalia bellirica', 24, 14, '', '', 45.85987261),
 (71, 'Sterculia foetida', 17.5, 14, '', '', 24.38296178),
 (72, 'Ficus fistulosa', 6, 14, '', '', 2.866242038),
 (73, 'Persea americana Mill,', 30, 15, '', '', 71.65605096),
 (74, 'Lagerstromeia speciosa', 13.5, 15, '', '', 14.51035032),
 (75, 'Lagerstromeia speciosa', 10.5, 15, '', '', 8.777866242),
 (76, 'Syzygium gracile', 8.5, 15, '', '', 5.752388535),
 (77, 'Syzygium gracile', 7.5, 15, '', '', 4.478503185),
 (78, 'Lagerstromeia speciosa', 23.5, 15, '', '', 43.96894904),
 (79, 'Litsea resinosa', 27, 16, '', '', 58.04140127),
 (80, 'Terminalia cattapa L,', 18.5, 16, '', '', 27.24920382),
 (81, 'Lagerstromeia speciosa', 27, 16, '', '', 58.04140127),
 (82, 'Lagerstromeia speciosa', 22.5, 16, '', '', 40.30652866),
 (83, 'Manglietia glauca', 15.5, 17, '', '', 19.12818471),
 (84, 'Manglietia glauca', 22.5, 17, '', '', 40.30652866),
 (85, 'Manglietia glauca', 17.5, 18, '', '', 24.38296178),
 (86, 'Manglietia glauca', 17, 18, '', '', 23.00955414),
 (87, 'Lagerstromeia speciosa', 10.5, 19, '', '', 8.777866242),
 (88, 'Persea americana Mill,', 12, 19, '', '', 11.46496815),
 (89, 'Lagerstromeia speciosa', 21, 19, '', '', 35.11146497),
 (90, 'Lagerstromeia speciosa', 14.5, 19, '', '', 16.73964968),
 (91, 'Lagerstromeia speciosa', 18.5, 19, '', '', 27.24920382),
 (92, 'Lagerstromeia speciosa', 11, 19, '', '', 9.633757962),
 (93, 'Phyllanthus emblica L,', 20, 19, '', '', 31.84713376),
 (94, 'Phyllanthus emblica L,', 19, 19, '', '', 28.74203822),
 (95, 'Scutellaria altissima', 29, 20, '', '', 66.95859873),
 (96, 'Samanea saman', 13, 20, '', '', 13.45541401),
 (97, 'Swietenia macrophylla', 24, 21, '', '', 45.85987261),
 (98, 'Swietenia macrophylla', 19, 21, '', '', 28.74203822),
 (99, 'Swietenia macrophylla', 27, 21, '', '', 58.04140127),
 (100, 'Cassia spectabilis', 8, 21, '', '', 5.095541401),
 (101, 'Cassia spectabilis', 8.5, 21, '', '', 5.752388535),
 (102, 'Manglietia glauca', 17, 21, '', '', 23.00955414),
 (103, 'Hibiscus tiliaceus L,', 24, 22, '', '', 45.85987261),
 (104, 'Hibiscus tiliaceus L,', 30.5, 22, '', '', 74.06449045),
 (105, 'Hibiscus tiliaceus L,', 30, 23, '', '', 71.65605096),
 (106, 'Michelia champaca L,', 19, 23, '', '', 28.74203822),
 (107, 'Michelia champaca L,', 14, 23, '', '', 15.60509554),
 (108, 'Michelia champaca L,', 20, 23, '', '', 31.84713376),
 (109, 'Michelia champaca L,', 10, 23, '', '', 7.961783439),
 (110, 'Ficus benjamina', 13, 24, '', '', 13.45541401),
 (111, 'Ficus benjamina', 12, 24, '', '', 11.46496815),
 (112, 'Sterculia oblongata', 17.5, 24, '', '', 24.38296178),
 (113, 'Samanea saman', 21.5, 24, '', '', 36.80334395),
 (114, 'Khaya anthotheca', 21, 25, '', '', 35.11146497),
 (115, 'Sterculia foetida', 27, 26, '', '', 58.04140127),
 (116, 'Swietenia macrophylla', 16, 26, '', '', 20.38216561),
 (117, 'Swietenia macrophylla', 20, 27, '', '', 31.84713376),
 (118, 'Hibiscus macrophyllus', 9.5, 28, '', '', 7.185509554),
 (119, 'Hibiscus macrophyllus', 13, 28, '', '', 13.45541401),
 (120, 'Musaenda frondosa', 27.5, 28, '', '', 60.21098726),
 (121, 'Musaenda frondosa', 5, 28, '', '', 1.99044586),
 (122, 'Swietenia macrophylla', 23, 28, '', '', 42.11783439),
 (123, 'Swietenia macrophylla', 21, 28, '', '', 35.11146497),
 (124, 'Swietenia macrophylla', 10.5, 28, '', '', 8.777866242),
 (125, 'Cassia spectabilis', 17, 29, '', '', 23.00955414),
 (126, 'Manglietia glauca', 10, 29, '', '', 7.961783439),
 (127, 'Cinnamomum sintok', 21, 30, '', '', 35.11146497),
 (128, 'Cinnamomum sintok', 18.5, 30, '', '', 27.24920382),
 (129, 'Cinnamomum sintok', 24.5, 30, '', '', 47.7906051),
 (130, 'Cinnamomum sintok', 30, 30, '', '', 71.65605096),
 (131, 'Cinnamomum sintok', 10, 30, '', '', 7.961783439),
 (132, 'Cinnamomum sintok', 5.5, 30, '', '', 2.40843949),
 (133, 'Cinnamomum sintok', 6, 30, '', '', 2.866242038),
 (134, 'Khaya anthotheca', 21, 31, '', '', 35.11146497),
 (135, 'Cassia spectabilis', 6, 32, '', '', 2.866242038),
 (136, 'Cassia spectabilis', 7, 32, '', '', 3.901273885),
 (137, 'Cassia spectabilis', 7, 32, '', '', 3.901273885),
 (138, 'Swietenia macrophylla', 26.5, 33, '', '', 55.9116242),
 (139, 'Kleya', 21, 34, '', '', 35.11146497),
 (140, 'Sterculia foetida', 23.5, 35, '', '', 43.96894904),
 (141, 'Sterculia foetida', 23.5, 35, '', '', 43.96894904),
 (142, 'Lagerstromeia speciosa', 21, 36, '', '', 35.11146497),
 (143, 'Lagerstromeia speciosa', 29, 36, '', '', 66.95859873),
 (144, 'Lagerstromeia speciosa', 30.5, 36, '', '', 74.06449045),
 (145, 'Lagerstromeia speciosa', 30, 36, '', '', 71.65605096),
 (146, 'Adenanthera pavonia', 30, 37, '', '', 71.65605096),
 (147, 'Manglietia glauca', 30.5, 38, '', '', 74.06449045),
 (148, 'Ficus benjamina', 15, 38, '', '', 17.91401274),
 (149, 'Manglietia glauca', 14, 39, '', '', 15.60509554),
 (150, 'Manglietia glauca', 16, 39, '', '', 20.38216561),
 (151, 'Macaranga denticulata', 10, 40, '', '', 7.961783439),
 (152, 'Macaranga denticulata', 8, 40, '', '', 5.095541401),
 (153, 'Khaya anthotheca', 26, 41, '', '', 53.82165605),
 (154, 'Khaya anthotheca', 21, 41, '', '', 35.11146497),
 (155, 'Khaya anthotheca', 17, 41, '', '', 23.00955414),
 (156, 'Swietenia macrophylla', 28, 42, '', '', 62.42038217),
 (157, 'Toona sinensis (Surian)', 27, 42, '', '', 58.04140127),
 (158, 'Tarenna incerta', 21, 43, '', '', 35.11146497),
 (159, 'Tarenna incerta', 11, 43, '', '', 9.633757962),
 (160, 'Manglietia glauca', 16, 43, '', '', 20.38216561),
 (161, 'Manglietia glauca', 22, 43, '', '', 38.53503185),
 (162, 'Tarenna incerta', 13, 44, '', '', 13.45541401),
 (163, 'Tarenna incerta', 17, 44, '', '', 23.00955414),
 (164, 'Tarenna incerta', 11, 44, '', '', 9.633757962),
 (165, 'Tarenna incerta', 22, 44, '', '', 38.53503185),
 (166, 'Tarenna incerta', 13, 44, '', '', 13.45541401),
 (167, 'Maesopsis eminii', 6, 44, '', '', 2.866242038),
 (168, 'Maesopsis eminii', 22, 44, '', '', 38.53503185),
 (169, 'Maesopsis eminii', 12, 44, '', '', 11.46496815),
 (170, 'Maesopsis eminii', 25, 44, '', '', 49.7611465),
 (171, 'Adenanthera pavonia', 14, 45, '', '', 15.60509554),
 (172, 'Dalbergia latifolia', 10, 45, '', '', 7.961783439),
 (173, 'Macaranga denticulata', 11, 45, '', '', 9.633757962),
 (174, 'Tarenna incerta', 18, 45, '', '', 25.79617834),
 (175, 'Terminalia bellirica', 33, 45, '', '', 86.70382166),
 (176, 'Dalbergia latifolia', 9, 45, '', '', 6.449044586),
 (177, 'Ficus virens', 12, 45, '', '', 11.46496815),
 (178, 'Tarenna incerta', 15, 45, '', '', 17.91401274),
 (179, 'Tarenna incerta', 11, 45, '', '', 9.633757962),
 (180, 'Tarenna incerta', 12, 45, '', '', 11.46496815),
 (181, 'Tarenna incerta', 27.5, 45, '', '', 60.21098726),
 (182, 'Swietenia macrophylla', 14, 46, '', '', 15.60509554),
 (183, 'Swietenia macrophylla', 11.5, 46, '', '', 10.5294586),
 (184, 'Swietenia macrophylla', 8, 46, '', '', 5.095541401),
 (185, 'Manglietia glauca', 25.4, 46, '', '', 51.36624204),
 (186, 'Manglietia glauca', 11, 46, '', '', 9.633757962),
 (187, 'Manglietia glauca', 27, 47, '', '', 58.04140127),
 (188, 'Manglietia glauca', 18, 47, '', '', 25.79617834),
 (189, 'Cassia spectabilis', 14, 48, '', '', 15.60509554),
 (190, 'Khaya anthotheca', 16, 48, '', '', 20.38216561);
/*!40000 ALTER TABLE `pancang` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-13  2:20:22
