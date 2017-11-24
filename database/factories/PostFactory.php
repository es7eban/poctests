<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Post::class, function (Faker $faker) {
    static $password;

    return [
        'user_id' => $faker->numberBetween(1,10),
        'title' => $faker->realText(50),
        'text' => $faker->realText(500)
    ];
});
