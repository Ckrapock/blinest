<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Room;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index', [
            'filters' => Request::all('search'),
            'top_rooms' => Room::isPublic()
                ->whereHas('playlists')
                ->whereNull('password')
                ->withCount('rounds')
                ->orderByDesc('rounds_count')
                ->limit(5)
                ->get(),
            'categories' => Category::all()->map(function ($category) {
                return [
                    'id' => $category->id,
                    'name' => $category->name,
                    'rooms' => $category->rooms()
                        ->whereHas('playlists')
                        ->whereNull('password')
                        ->with('owner')
                        ->filter(Request::only('search'))
                        ->withCount('rounds')
                        ->paginate(30, ['*'], 'cat'.$category->id)
                        ->withQueryString(),
                ];
            }),
            'private_rooms' => Auth::user() ? Auth::user()->rooms()
                ->with('owner')
                ->where('is_public', false)
                ->whereHas('playlists')
                ->filter(Request::only('search'))
                ->withCount('rounds')
                ->orderByDesc('rounds_count')
                ->paginate(30, ['*'], 'private')
                ->withQueryString() : null,
        ]);
    }
}
