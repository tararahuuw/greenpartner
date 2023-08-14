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
-- Table structure for table `pohon`
--

DROP TABLE IF EXISTS `pohon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pohon` (
  `nomor_pohon` int NOT NULL AUTO_INCREMENT,
  `nama_spesies` varchar(38) COLLATE utf8mb4_general_ci NOT NULL,
  `keliling` decimal(5,1) NOT NULL,
  `plot` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `luas` float DEFAULT NULL,
  PRIMARY KEY (`nomor_pohon`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pohon`
--

LOCK TABLES `pohon` WRITE;
/*!40000 ALTER TABLE `pohon` DISABLE KEYS */;
INSERT INTO `pohon` (`nomor_pohon`, `nama_spesies`, `keliling`, `plot`, `createdAt`, `updatedAt`, `luas`) VALUES (1, 'Aleurites mollucana', 127, 1, '', '', 1284.156051),
 (2, 'Toona sinensis', 81, 1, '', '', 522.3726115),
 (3, 'Toona sinensis', 83, 1, '', '', 548.4872611),
 (4, 'Gmelina arborea', 75.5, 1, '', '', 453.8415605),
 (5, 'Manglietia glauca', 62.5, 2, '', '', 311.0071656),
 (6, 'Khaya anthotheca', 69, 2, '', '', 379.0605096),
 (7, 'Melia azedarach L', 79, 2, '', '', 496.8949045),
 (8, 'Toona sinensis', 80.5, 2, '', '', 515.9434713),
 (9, 'Samanea saman', 78, 2, '', '', 484.3949045),
 (10, 'Melia azedarach L', 64, 2, '', '', 326.1146497),
 (11, 'Cassia spectabilis', 78, 3, '', '', 484.3949045),
 (12, 'Manglietia glauca', 74, 3, '', '', 435.9872611),
 (13, 'Alstonia scholaris', 105, 3, '', '', 877.7866242),
 (14, 'Cassia spectabilis', 64.5, 3, '', '', 331.2300955),
 (15, 'Manglietia glauca', 75, 4, '', '', 447.8503185),
 (16, 'Khaya anthotheca', 68, 4, '', '', 368.1528662),
 (17, 'Manglietia glauca', 138, 5, '', '', 1516.242038),
 (18, 'Cassia spectabilis', 104, 5, '', '', 861.1464968),
 (19, 'Toona sinensis', 87, 6, '', '', 602.6273885),
 (20, 'Melia azedarach L', 103, 6, '', '', 844.6656051),
 (21, 'Cassia spectabilis', 97, 7, '', '', 749.1242038),
 (22, 'Cassia spectabilis', 67, 7, '', '', 357.4044586),
 (23, 'Manglietia glauca', 64.5, 7, '', '', 331.2300955),
 (24, 'Cassia spectabilis', 66.5, 8, '', '', 352.0899682),
 (25, 'Cassia spectabilis', 63, 8, '', '', 316.0031847),
 (26, 'Cassia spectabilis', 63, 8, '', '', 316.0031847),
 (27, 'Cassia spectabilis', 64, 8, '', '', 326.1146497),
 (28, 'Cassia spectabilis', 68, 8, '', '', 368.1528662),
 (29, 'Phyllanthus emblica L, (Malaka)', 102, 8, '', '', 828.343949),
 (30, 'Elaeocarpus sphaericus', 71, 9, '', '', 401.3535032),
 (31, 'Elaeocarpus sphaericus', 80, 9, '', '', 509.5541401),
 (32, 'Elaeocarpus sphaericus', 68, 9, '', '', 368.1528662),
 (33, 'Elaeocarpus sphaericus', 72, 9, '', '', 412.7388535),
 (34, 'Elaeocarpus sphaericus', 76, 9, '', '', 459.8726115),
 (35, 'Toona spectabilis', 65.5, 9, '', '', 341.580414),
 (36, 'Mangifera foetida (Limus)', 110, 10, '', '', 963.3757962),
 (37, 'Maesopsis eminii', 83, 13, '', '', 548.4872611),
 (38, 'Alstonia scholaris', 129, 13, '', '', 1324.920382),
 (39, 'Alstonia scholaris', 69, 13, '', '', 379.0605096),
 (40, 'Hibiscus tiliaceus L, (Waru)', 65, 13, '', '', 336.3853503),
 (41, 'Mangifera indica', 71, 13, '', '', 401.3535032),
 (42, 'Antochepalus sinensis', 136, 13, '', '', 1472.611465),
 (43, 'Toona sinensis', 114, 14, '', '', 1034.713376),
 (44, 'Toona sinensis', 84, 14, '', '', 561.7834395),
 (45, 'Toona sinensis', 110.5, 14, '', '', 972.1536624),
 (46, 'Toona sinensis', 129, 14, '', '', 1324.920382),
 (47, 'Manglietia glauca', 66, 14, '', '', 346.8152866),
 (48, 'Toona sinensis', 122, 14, '', '', 1185.031847),
 (49, 'Toona sinensis', 96, 15, '', '', 733.7579618),
 (50, 'Toona sinensis', 120, 15, '', '', 1146.496815),
 (51, 'Schima wallichii', 96.7, 16, '', '', 744.4976115),
 (52, 'Toona sinensis', 67, 16, '', '', 357.4044586),
 (53, 'Toona sinensis', 76, 16, '', '', 459.8726115),
 (54, 'Toona sinensis', 67, 16, '', '', 357.4044586),
 (55, 'Melia azedarach L', 91, 16, '', '', 659.3152866),
 (56, 'Swietenia macrophylla', 63.5, 17, '', '', 321.0390127),
 (57, 'Swietenia macrophylla', 67, 17, '', '', 357.4044586),
 (58, 'Toona sinensis', 75.5, 17, '', '', 453.8415605),
 (59, 'Elaeocarpus sphaericus', 62, 17, '', '', 306.0509554),
 (60, 'Anthocephalus cadamba', 102.5, 18, '', '', 836.4848726),
 (61, 'Anthocephalus cadamba', 105, 18, '', '', 877.7866242),
 (62, 'Toona sinensis', 89, 19, '', '', 630.6528662),
 (63, 'Khaya anthotheca', 64, 19, '', '', 326.1146497),
 (64, 'Khaya anthotheca', 84, 19, '', '', 561.7834395),
 (65, 'Swietenia macrophylla', 75, 19, '', '', 447.8503185),
 (66, 'Toona sinensis', 78, 19, '', '', 484.3949045),
 (67, 'Anthocephalus cadamba', 91, 21, '', '', 659.3152866),
 (68, 'Alstonia scholaris', 88.5, 21, '', '', 623.5867834),
 (69, 'Swietenia macrophylla', 67, 22, '', '', 357.4044586),
 (70, 'Khaya anthotheca', 84, 22, '', '', 561.7834395),
 (71, 'Toona sinensis', 76.5, 22, '', '', 465.9434713),
 (72, 'Cassia spectabilis', 68.5, 22, '', '', 373.5867834),
 (73, 'Cassia spectabilis', 68, 22, '', '', 368.1528662),
 (74, 'Alstonia scholaris', 107.5, 23, '', '', 920.0835987),
 (75, 'Alstonia scholaris', 154, 23, '', '', 1888.216561),
 (76, 'Swietenia macrophylla', 64, 23, '', '', 326.1146497),
 (77, 'Maesopsis eminii', 71, 23, '', '', 401.3535032),
 (78, 'Toona sinensis', 111, 24, '', '', 980.9713376),
 (79, 'Toona sinensis', 88, 25, '', '', 616.5605096),
 (80, 'Toona sinensis', 71.5, 25, '', '', 407.0262739),
 (81, 'Toona sinensis', 66, 25, '', '', 346.8152866),
 (82, 'Toona sinensis', 87, 25, '', '', 602.6273885),
 (83, 'Khaya anthotheca', 65.5, 25, '', '', 341.580414),
 (84, 'Sterculia oblongata', 77, 25, '', '', 472.0541401),
 (85, 'Melia azedarach L', 81, 25, '', '', 522.3726115),
 (86, 'Toona sinensis', 71, 26, '', '', 401.3535032),
 (87, 'Toona sinensis', 83, 26, '', '', 548.4872611),
 (88, 'Toona sinensis', 73, 26, '', '', 424.2834395),
 (89, 'Toona sinensis', 87, 27, '', '', 602.6273885),
 (90, 'Hibiscus macrophyllus', 75, 27, '', '', 447.8503185),
 (91, 'Swietenia macrophylla', 51, 28, '', '', 207.0859873),
 (92, 'Manglietia glauca', 54, 28, '', '', 232.1656051),
 (93, 'Hibiscus macrophyllus', 79, 28, '', '', 496.8949045),
 (94, 'Swietenia macrophylla', 74, 29, '', '', 435.9872611),
 (95, 'Cassia spectabilis', 85, 29, '', '', 575.2388535),
 (96, 'Aleurites mollucana', 122, 29, '', '', 1185.031847),
 (97, 'Toona sinensis', 96, 30, '', '', 733.7579618),
 (98, 'Syzygium polyanthum', 65, 30, '', '', 336.3853503),
 (99, 'Toona sinensis', 97, 30, '', '', 749.1242038),
 (100, 'Khaya anthotheca', 64, 30, '', '', 326.1146497),
 (101, 'Khaya anthotheca', 76, 30, '', '', 459.8726115),
 (102, 'Kiara condong', 67.5, 30, '', '', 362.758758),
 (103, 'Hibiscus macrophyllus', 64, 30, '', '', 326.1146497),
 (104, 'Toona sinensis', 69, 30, '', '', 379.0605096),
 (105, 'Eucalyptus alba', 101, 30, '', '', 812.1815287),
 (106, 'Eucalyptus alba', 93, 30, '', '', 688.6146497),
 (107, 'Cassia spectabilis', 97, 30, '', '', 749.1242038),
 (108, 'Cassia spectabilis', 81, 30, '', '', 522.3726115),
 (109, 'Kiara condong', 71, 30, '', '', 401.3535032),
 (110, 'Terminalia bellirica', 74, 30, '', '', 435.9872611),
 (111, 'Antochepalus sinensis', 62, 30, '', '', 306.0509554),
 (112, 'Toona sinensis', 86, 31, '', '', 588.8535032),
 (113, 'Khaya anthotheca', 62, 31, '', '', 306.0509554),
 (114, 'Swietenia macrophylla', 75, 32, '', '', 447.8503185),
 (115, 'Khaya anthotheca', 92, 32, '', '', 673.8853503),
 (116, 'Khaya anthotheca', 71, 32, '', '', 401.3535032),
 (117, 'Khaya anthotheca', 68, 32, '', '', 368.1528662),
 (118, 'Persea americana', 81, 32, '', '', 522.3726115),
 (119, 'Hibiscus macrophyllus', 68, 33, '', '', 368.1528662),
 (120, 'Hibiscus macrophyllus', 62, 33, '', '', 306.0509554),
 (121, 'Toona sinensis', 63, 33, '', '', 316.0031847),
 (122, 'Toona sinensis', 81, 33, '', '', 522.3726115),
 (123, 'Hibiscus macrophyllus', 75, 34, '', '', 447.8503185),
 (124, 'Cassia spectabilis', 68, 34, '', '', 368.1528662),
 (125, 'Persea americana', 65, 34, '', '', 336.3853503),
 (126, 'Toona sinensis', 73, 34, '', '', 424.2834395),
 (127, 'Toona sinensis', 92.5, 35, '', '', 681.2300955),
 (128, 'Toona sinensis', 68.5, 35, '', '', 373.5867834),
 (129, 'Melia azedarach L', 67.5, 36, '', '', 362.758758),
 (130, 'Melia azedarach L', 78, 37, '', '', 484.3949045),
 (131, 'Khaya anthotheca', 74.5, 39, '', '', 441.8988854),
 (132, 'Khaya anthotheca', 67, 39, '', '', 357.4044586),
 (133, 'Toona sinensis', 69, 39, '', '', 379.0605096),
 (134, 'Toona sinensis', 64, 39, '', '', 326.1146497),
 (135, 'Toona sinensis', 67, 39, '', '', 357.4044586),
 (136, 'Khaya anthotheca', 63, 40, '', '', 316.0031847),
 (137, 'Khaya anthotheca', 68, 40, '', '', 368.1528662),
 (138, 'Khaya anthotheca', 70, 40, '', '', 390.1273885),
 (139, 'Eucalyptus alba', 110, 40, '', '', 963.3757962),
 (140, 'Eucalyptus alba', 64, 40, '', '', 326.1146497),
 (141, 'Eucalyptus alba', 65.5, 40, '', '', 341.580414),
 (142, 'Eucalyptus alba', 63.5, 40, '', '', 321.0390127),
 (143, 'Toona sinensis', 77, 40, '', '', 472.0541401),
 (144, 'Toona sinensis', 72, 40, '', '', 412.7388535),
 (145, 'Swietenia macrophylla', 69, 40, '', '', 379.0605096),
 (146, 'Khaya anthotheca', 74, 41, '', '', 435.9872611),
 (147, 'Persea americana', 67, 41, '', '', 357.4044586),
 (148, 'Toona sinensis', 78.5, 43, '', '', 490.625),
 (149, 'Toona sinensis', 77, 43, '', '', 472.0541401),
 (150, 'Toona sinensis', 92, 43, '', '', 673.8853503),
 (151, 'Toona sinensis', 84, 43, '', '', 561.7834395),
 (152, 'Khaya anthotheca', 70, 43, '', '', 390.1273885),
 (153, 'Khaya anthotheca', 68.5, 43, '', '', 373.5867834),
 (154, 'Persea americana', 94.5, 46, '', '', 711.0071656),
 (155, 'Persea americana', 77, 46, '', '', 472.0541401),
 (156, 'Khaya anthotheca', 77, 46, '', '', 472.0541401),
 (157, 'Khaya anthotheca', 64.5, 46, '', '', 331.2300955),
 (158, 'Khaya anthotheca', 76, 46, '', '', 459.8726115),
 (159, 'Khaya anthotheca', 74, 46, '', '', 435.9872611),
 (160, 'Maesopsis eminii', 68, 46, '', '', 368.1528662),
 (161, 'Samanea saman', 72, 46, '', '', 412.7388535),
 (162, 'Khaya anthotheca', 98, 47, '', '', 764.6496815),
 (163, 'Khaya anthotheca', 85.5, 47, '', '', 582.0262739),
 (164, 'Cassia spectabilis', 72, 47, '', '', 412.7388535),
 (165, 'Toona sinensis', 93, 48, '', '', 688.6146497),
 (166, 'Persea americana', 64, 48, '', '', 326.1146497),
 (167, 'Persea americana', 65, 48, '', '', 336.3853503),
 (168, 'Cassia spectabilis', 109, 48, '', '', 945.9394904),
 (169, 'Swietenia macrophylla', 97, 48, '', '', 749.1242038),
 (170, 'Swietenia macrophylla', 64, 48, '', '', 326.1146497);
/*!40000 ALTER TABLE `pohon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-13  2:56:23
