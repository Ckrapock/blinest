<?php

namespace Database\Seeders;

use App\Models\Old\OldUser;
use App\Models\User;
use Illuminate\Database\Seeder;

class ImportOldUsers extends Seeder
{
    public function run()
    {
        $count = OldUser::count();
        $bar = $this->command->getOutput()->createProgressBar($count);

        OldUser::chunk(500, function ($users) use ($bar) {
            $formatedUsers = $users->map(fn ($user) => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'password' => $user->password,
                'provider' => $user->provider,
                'provider_id' => $user->provider_id,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ]);
            User::upsert(
                $formatedUsers->toArray(),
                ['id'],
                ['name', 'email', 'password', 'provider', 'provider_id', 'created_at', 'updated_at']
            );

            $bar->advance(500);
        });

        User::find(1)->update([
            'is_administrator' => true,
        ]);

        $bar->finish();
        $this->command->line('');
    }
}
