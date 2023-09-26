-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2023 at 10:44 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fullstack_ecomm`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `product_id`, `product_quantity`, `created_at`, `updated_at`) VALUES
(11, 2, 11, 1, NULL, NULL),
(12, 3, 15, 2, NULL, '2023-09-26 17:42:03');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `meta_description` mediumtext DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `slug`, `description`, `image`, `meta_title`, `meta_keyword`, `meta_description`, `status`, `created_at`, `updated_at`) VALUES
(7, 'jeans', 'jeans', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus officia non dolor minima nobis ut.', 'uploads/categories/64ff851e182b6.jpg', 'Meta Title', 'Meta Keyword', 'Meta Description', 0, '2023-09-02 10:13:27', '2023-09-11 18:22:38'),
(10, 't-shirts', 't-shirts', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maiores quo distinctio nobis adipisci fugit?', 'uploads/categories/64ff856395ba9.jpg', 'Meta Title', 'Meta Keyword', 'Meta Description', 0, '2023-09-02 14:45:05', '2023-09-11 18:23:47'),
(11, 'Shirts', 'Shirts', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos unde odio adipisci, facere dignissimos et minima architecto atque quidem!', 'uploads/categories/64ff84d3d753a.jpg', 'Meta Title', 'Meta Keyword', 'Meta Description', 0, '2023-09-02 14:45:27', '2023-09-11 18:21:23'),
(15, 'sports', 'sports', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem in fugiat maiores.', 'uploads/categories/64ff8621d09dd.jpg', 'Meta Title', 'Meta Keyword', 'Meta Description', 0, '2023-09-11 18:26:57', '2023-09-11 18:26:57'),
(16, 'sofa', 'sofa', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, sed, aliquam cupiditate labore maiores aperiam architecto assumenda qui illum amet possimus itaque.', 'uploads/categories/64ff88496bc97.jpg', 'Meta Title', 'Meta Keyword', 'Meta Description', 0, '2023-09-11 18:36:09', '2023-09-11 18:36:09'),
(17, 'tv', 'tv', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, officiis. Error, dolore.', 'uploads/categories/64ff7b502dec6.jpg', 'Meta Title', 'Meta Keyword', 'Meta Description', 0, '2023-09-11 17:40:48', '2023-09-11 17:40:48');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_09_02_121046_create_categories_table', 2),
(6, '2023_09_02_173133_create_products_table', 3),
(7, '2023_09_09_122720_create_carts_table', 4),
(8, '2023_09_09_193502_create_orders_table', 5),
(9, '2023_09_09_193524_create_order_items_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip_code` varchar(255) NOT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) NOT NULL,
  `tracking_number` varchar(255) NOT NULL,
  `remark` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(4, 'App\\Models\\User', 2, 'main', 'e3b4fe09f113c7c6b5c40083a89ff6c18c6dbd2a78a5bbf364dd63d023bea800', '[\"*\"]', NULL, NULL, '2023-09-01 19:02:36', '2023-09-01 19:02:36'),
(8, 'App\\Models\\User', 2, 'main', 'ea072d49d5eed708a5f5dec41a95619200c68ef1959c0b815f16607f9fa9d5cd', '[\"*\"]', NULL, NULL, '2023-09-01 19:12:59', '2023-09-01 19:12:59'),
(10, 'App\\Models\\User', 3, 'main', 'ba3dd54e98838f6f9ce1ba2ba9411ab9ecfcbb1deb9324410206a0f0c012db76', '[\"*\"]', NULL, NULL, '2023-09-02 06:30:09', '2023-09-02 06:30:09'),
(32, 'App\\Models\\User', 3, 'main', 'cc4d577b448ef8b05b3e5ebb20280fa9fa3164f2fb046c52d5477c8bd579c8a4', '[\"*\"]', NULL, NULL, '2023-09-26 15:14:02', '2023-09-26 15:14:02'),
(34, 'App\\Models\\User', 3, 'main', 'b8842a2fdffa7dc1fbc1873e2f56514bbbd2bf702728267217222f9bfeaef3a9', '[\"*\"]', '2023-09-26 17:42:03', NULL, '2023-09-26 15:21:28', '2023-09-26 17:42:03');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_keywords` varchar(255) DEFAULT NULL,
  `meta_description` mediumtext DEFAULT NULL,
  `original_price` varchar(255) NOT NULL,
  `selling_price` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `popular` tinyint(1) NOT NULL DEFAULT 0,
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `title`, `slug`, `description`, `meta_title`, `meta_keywords`, `meta_description`, `original_price`, `selling_price`, `brand`, `image`, `quantity`, `status`, `popular`, `featured`, `created_at`, `updated_at`) VALUES
(8, 7, 'Lorem ipsum dolor sit amet.', 'jeans', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab debitis aspernatur quia est molestias quibusdam dolores ut error officiis.', 'Meta Title', 'Meta Keyword', 'Meta Description', '120', '100', 'zara', 'uploads/products/64ff7ecfb53a8.jpg', '15', 0, 1, 1, '2023-09-11 17:55:43', '2023-09-11 17:55:43'),
(9, 7, 'ex iusto harum au', 'jeans', 'oluta in illum, consequuntur ullam et rem enim voluptates aut nemo quasi ipsum consequatur delectus blanditiis, ducimus minus? Eos molestiae earum consequatu', 'Meta Title', 'Meta Keyword', 'Meta Description', '150', '130', 'gap', 'uploads/products/64ff7f74ce78e.jpg', '25', 0, 1, 1, '2023-09-11 17:58:28', '2023-09-11 17:58:28'),
(10, 7, 'voluptatem cum re', 'jeans', 'iste dolor nulla, fugit soluta! Quae qui sequi, eligendi aliquam beatae earum, maiores magnam amet nesciunt accusamus mollitia nulla minima porro quibusdam', 'Meta Title', 'Meta Keyword', 'Meta Description', '250', '200', 'zara', 'uploads/products/64ff7fa671c0f.jpg', '24', 0, 1, 1, '2023-09-11 17:59:18', '2023-09-11 17:59:18'),
(11, 10, 'voluptatem cum reprehenderit', 't-shirt', 'consequuntur ullam et rem enim voluptates aut nemo quasi ipsum consequatur delectus blanditiis, ducimus minus? Eos molestiae earum consequatur', 'Meta Title', 'Meta Keyword', 'Meta Description', '600', '450', 'zara', 'uploads/products/65046a847c3e6.jpg', '45', 0, 1, 1, '2023-09-15 11:30:28', '2023-09-15 11:30:28'),
(12, 10, 'aliquid in blanditiis', 't-shirt', 'cumque officia laborum eveniet tempora! Dicta aliquid, explicabo sunt ipsam laudantium earum eaque exercitationem nam nesciunt voluptatem cum', 'Meta Title', 'Meta Keyword', 'Meta Description', '570', '500', 'h&m', 'uploads/products/65046ac8c0efe.jpg', '90', 0, 1, 0, '2023-09-15 11:31:36', '2023-09-15 11:31:36'),
(13, 10, 'repellendus ratione rem', 't-shirt', 'Natus quidem voluptatem est repellendus laboriosam dicta error laborum sed vel quae, dolores iusto beatae nesciunt vero illum reiciendis quam', 'Meta Title', 'Meta Keyword', 'Meta Description', '780', '670', 'bershka', 'uploads/products/65046b2f5995d.jpg', '55', 0, 0, 1, '2023-09-15 11:33:19', '2023-09-15 11:33:19'),
(14, 11, 'ibus deserunt architecto', 'shirts', 'Laborum fugiat temporibus optio ipsum odio sit doloremque minus quia, aliquam voluptates necessitatibus ipsa nostrum non ab aperiam cumque debitis illo', 'Meta Title', 'Meta Keyword', 'Meta Description', '400', '340', 'beneshty', 'uploads/products/650465a1cafd3.jpg', '34', 0, 1, 0, '2023-09-15 11:09:37', '2023-09-15 11:09:37'),
(15, 11, 'quod qui cupiditate', 'shirts', 'totam vitae. Perferendis voluptas nesciunt nobis corrupti, quidem et similique quas a illum', 'Meta Title', 'Meta Keyword', 'Meta Description', '450', '400', 'Hermès', 'uploads/products/6504669036c59.jpg', '23', 0, 0, 1, '2023-09-15 11:13:36', '2023-09-15 11:13:36'),
(16, 11, 'illo dolore mollitia', 'shirts', 'ducimus minus? Eos molestiae earum consequatur ut tempore blanditiis amet, suscipit deleniti minus nulla adipisci possimus sit repellendus ratione rem, voluptates dolorum cupiditate', 'Meta Title', 'Meta Keyword', 'Meta Description', '780', '700', 'Cartier', 'uploads/products/650466e47389b.jpg', '78', 0, 1, 1, '2023-09-15 11:15:00', '2023-09-15 11:15:00'),
(17, 15, 'cumque debitis illo', 'sports', 'consequuntur ullam et rem enim voluptates aut nemo quasi ipsum consequatur delectus blanditiis, ducimus minus? Eos molestiae earum consequatur ut', 'Meta Title', 'Meta Keyword', 'Meta Description', '400', '230', 'Cartier', 'uploads/products/6504676b001a1.jpg', '23', 0, 1, 1, '2023-09-15 11:17:15', '2023-09-15 11:17:15'),
(18, 15, 'reiciendis ex iusto', 'sports', 'tempora ipsa nemo corrupti. Error ad officiis quis maxime autem consequatur nemo quidem esse earum! Natus quidem voluptatem est repellendus laboriosam dicta error laborum', 'Meta Title', 'Meta Keyword', 'Meta Description', '800', '670', 'Adidas', 'uploads/products/650467b1c9b55.jpg', '120', 0, 0, 0, '2023-09-15 11:18:25', '2023-09-15 11:18:25'),
(19, 15, 'Perferendis voluptas nesciunt', 'sports', 'dis ex iusto harum aut beatae quod rem! Magni omnis accusantium sapiente? Dolorem culpa vero similique perferendis molestiae aliquid in blanditiis, illum n', 'Meta Title', 'Meta Keyword', 'Meta Description', '120', '110', 'Fabindia', 'uploads/products/65131a815bf0a.jpg', '22', 1, 1, 1, '2023-09-26 14:53:05', '2023-09-26 14:53:05'),
(20, 16, 'aboriosam di', 'sofa', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, provident. Eligend', 'Meta Title', 'Meta Keyword', 'Meta Description', '780', '700', 'Flying Machine', 'uploads/products/65131ad0bdaf8.jpg', '567', 0, 0, 1, '2023-09-26 14:54:24', '2023-09-26 14:54:24'),
(21, 16, 'm et similique q', 'sofa', 'uasi ipsum consequatur delectus blanditiis, ducimus minus? Eos molestiae earum consequatur ut tempore blanditiis amet, suscipit deleniti minus nulla adipisci possimus sit repellendus ratione rem, voluptates dolorum cupiditate temporibus imp', NULL, NULL, NULL, '560', '400', 'Louis Philippe', 'uploads/products/65131b0374ac9.jpg', '45', 0, 0, 0, '2023-09-26 14:55:15', '2023-09-26 14:55:15'),
(22, 16, 'nulla quod qui cupiditate', 'sofa', 'Excepturi hic iusto omnis odit ad cumque officia laborum eveniet tempora! Dicta aliquid, explicabo sunt ipsam laudantium earum eaque exercitationem nam nesciunt', 'Meta Title', 'Meta Keyword', 'Meta Description', '800', '680', 'Cartier', 'uploads/products/65131b3bd21c5.jpg', '50', 0, 1, 0, '2023-09-26 14:56:11', '2023-09-26 14:56:11'),
(23, 17, 'temporibus optio', 'tv', 'emporibus optio ipsum odio sit doloremque minus quia, aliquam voluptates necessitatibus ipsa nostrum non ab aperiam cumque debitis illo dolore mollitia excepturi deserunt culpa? Quo architecto reprehenderit nulla quod qui cupiditate?', 'Meta Title', 'Meta Keyword', 'Meta Description', '7000', '6700', 'samsung', 'uploads/products/65131b6fb1fa9.jpg', '60', 0, 1, 1, '2023-09-26 14:57:03', '2023-09-26 14:57:03'),
(25, 17, 'temporibus impedit', 'tv', 'eritatis aliquam laboriosam officiis nemo, reiciendis ex iusto harum aut beatae quod rem! Magni omnis accusantium sapiente? Dolorem culpa vero similique perferendis molestiae aliquid in blanditiis, illum nihil sit repudiandae accusamus qua', 'Meta Title', 'Meta Keyword', 'Meta Description', '6000', '5800', 'lg', 'uploads/products/65131c3215422.jpg', '50', 0, 0, 1, '2023-09-26 15:00:18', '2023-09-26 15:00:18'),
(26, 17, 'Quae qui sequi', 'tv', 'or nulla, fugit soluta! Quae qui sequi, eligendi aliquam beatae earum, maiores magnam amet nesciunt accusamus mollitia nulla minima porro quibusdam, cumque volupt', NULL, NULL, NULL, '4000', '3400', 'toshiba', 'uploads/products/65131c669d336.jpg', '56', 0, 0, 1, '2023-09-26 15:01:10', '2023-09-26 15:01:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role_as` int(11) DEFAULT 0 COMMENT '0=users\r\n1=admin',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_as`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'admin', 'admin@admin.com', NULL, '$2y$10$.SYMYLHhFzA17yv1wGpBQezZLZD0VDgaq6rUS5jdSKvebKBIMYqU.', 1, NULL, '2023-09-01 18:41:13', '2023-09-01 18:41:13'),
(3, 'muhammed92', 'muhammed@gmail.com', NULL, '$2y$10$fgExr1IE4qWgLnpfrZK2mOwxy08LOv4jlXiupOPxBNCfrpry8iVOa', 0, NULL, '2023-09-02 06:30:09', '2023-09-02 06:30:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
