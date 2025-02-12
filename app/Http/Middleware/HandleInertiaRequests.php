<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => function () use ($request) {
                return [
                    'user' => $request->user() ? [
                        'id' => $request->user()->id,
                        'name' => $request->user()->name,
                        'photo' => $request->user()->photo,
                        'admin' => $request->user()->isAdministrator(),
                        'is_public_moderator' => $request->user()->isPublicModerator(),
                        'team' => $request->user()->team,
                        'notifications' => $request->user()->unreadNotifications,
                        'permissions' => [
                            'canUploadImage' => $request->user()->canUploadImage(),
                        ],
                        'pending_requests' => $request->user()->teamRequests()->whereNull('declined_at')->pluck('team_id'),
                        'declined_requests' => $request->user()->teamRequests()->whereNotNull('declined_at')->pluck('team_id'),
                    ] : null,
                ];
            },
            'publicModerators' => User::publicModerators()->select('id', 'name')->get(),
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                    'message' => $request->session()->get('message'),
                ];
            },
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'locale' => function () {
                return app()->getLocale();
            },
            'language' => function () {
                return translations(
                    resource_path('lang/'.app()->getLocale().'/'.app()->getLocale().'.json')
                );
            },
        ]);
    }
}
