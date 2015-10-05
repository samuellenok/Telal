<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Telal
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<!--[if lt IE 10]>
		<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'telal' ); ?></a>
	<header id="masthead" class="site-header" role="banner">
		<div class="site-branding container-fluid">
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img src="<?php echo get_template_directory_uri() ?>/img/logo_telal.png" alt="<?php bloginfo( 'name' ); ?>-<?php bloginfo( 'description' ); ?>"/></a></h1>
		</div><!-- .site-branding -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
