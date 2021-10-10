<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Post::truncate();
        User::truncate();
        $faker = Factory::create();

        for ($i = 0; $i < 30; $i++) {
            Post::create([
                'title' => $faker->sentence,
                'content' => $faker->paragraphs(3, true),
                'is_draft' => $faker->boolean,
                'is_public' => $faker->boolean,
                'date_published' => $faker->date
            ]);
        }

        User::create([
            'name' => 'Manuel Trinidad',
            'handle' => 'KiNO',
            'password' => Hash::make('password'),
            'email' => 'matrinu@pm.me'
        ]);
    }
}
