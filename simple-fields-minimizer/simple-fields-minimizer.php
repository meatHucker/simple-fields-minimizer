<?php
/*
   Plugin Name: Simple Fields Minimizer
   Description: Modifies Simple Fields plugin, giving long fields ability to minimize all or per section and re-sort
   Version: 1.0.1
   Author: Michael Shiplet && Ryan Parrish - Super Top Secret
   Author URI: http://wearetopsecret.com
   License: The MIT License (MIT)
 */

/*
   Copyright: 2017 Michael Shiplet (email: mnshiplet@gmail.com) | Ryan Parrish (email: ryan.parish@wearetopsecret.com)
   All Rights Reserved
 */


add_action('admin_menu', 'add_simple_fields_minimizer_script_and_css');

// register scripts
function add_simple_fields_minimizer_script_and_css() {
    wp_register_script('simple_fields_minimizer_script', plugins_url('/simple-fields-minimizer/js/main.js'), array('jquery'), null, true);
    wp_enqueue_script('simple_fields_minimizer_script');

    wp_register_style('simple_fields_minimizer_styles', plugins_url('/simple-fields-minimizer/css/main.css'));
    wp_enqueue_style('simple_fields_minimizer_styles');
}

