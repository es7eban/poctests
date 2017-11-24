<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*DB::table('posts')->insert([
            'user_id' => rand(1,10),
            'title' =>str_random(50),
            'text' =>str_random(500)
        ]);*/
        factory(App\Post::class,10)->create();
    }
}
