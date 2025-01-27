<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\User;
use App\Rules\Reserved;
use App\Services\SendinblueService;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    public function show()
    {
        $user = Auth::user();

        return Inertia::render('Me/Show', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'photo' => $user->photo,
                'created_at' => $user->created_at->format('d/m/Y H:i'),
                'created_at_from_now' => $user->created_at->diffForHumans(),
                'latest_round_at' => $user->scores()->latest()->first()?->round?->created_at->format('d/m/Y H:i'),
                'rooms' => $user->allRooms,
                'playlists' => $user->allPlaylists,
                'total_score' => floatval($user->scores()->sum('score')),
                'scores' => $user->allScores()->paginate(10)->through(fn ($score) => [
                    'room_id' => $score->room_id,
                    'room_slug' => $score->room_slug,
                    'name' => $score->name,
                    'date' => $score->updated_at->diffForHumans(),
                    'total' => $score->total,
                    'max' => $user->maxScoreByRoom(Room::find($score->room_id))->first()?->total ?? '-',
                ]),
            ],
        ]);
    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'photo' => $user->photo,
                'deleted_at' => $user->deleted_at,
            ],
        ]);
    }

    public function update(User $user)
    {
        if (Auth::user()->id === $user->id) {
            Request::validate([
                'name' => ['required', 'max:25', Rule::unique('users')->ignore($user->id), new Reserved],
                'email' => ['required', 'max:255', 'email:rfc,dns', Rule::unique('users')->ignore($user->id)],
                'password' => ['nullable', Rules\Password::defaults()],
                'photo' => ['nullable', 'image'],
            ]);

            $user->update(Request::only('name', 'email'));

            if (Request::file('photo')) {
                $user->updatePhoto(Request::file('photo'));
            }

            if (Request::get('password')) {
                $user->update(['password' => Hash::make(Request::get('password'))]);
            }

            return Redirect::back()->with('success', __('Updated.'));
        }
    }

    public function destroy(User $user)
    {
        if (Auth::user()->id === $user->id || Auth::user()->isAdministrator()) {
            (new SendinblueService)->contacts()->delete($user);
            $user->deletePhoto();
            $user->forceDelete();
            Session::flush();
            Auth::logout();

            return redirect('login');
        } else {
            abort(403, __('Unauthorized action.'));
        }
    }

    public function markNotificationAsRead($id)
    {
        Auth::user()->notifications()->find($id)->markAsRead();

        return Redirect::back();
    }

    public function markNotificationAsDone($id)
    {
        $done = Auth::user()->notifications()->find($id);

        DatabaseNotification::where('type', $done->type)->whereNull('read_at')->get()->each(function ($notification) use ($done) {
            if ($notification->data['message'] == $done->data['message']) {
                $notification->markAsRead();
            }
        });

        return Redirect::back();
    }
}