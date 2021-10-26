<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Role;
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
        $faker = Factory::create();

        for ($i = 0; $i < 2; $i++) {
            Post::create([
                'title' => $faker->sentence,
                'content' => $faker->paragraphs(3, true),
                'is_draft' => false,
                'is_public' => true,
                'date_published' => $faker->date
            ]);
        }

        $user = User::create([
            'name' => 'Manuel Trinidad',
            'handle' => "kino",
            'password' => Hash::make('1111'),
            'email' => 'manuel@me.test'
        ]);

        $user->roles()->attach('admin');
    }
}
