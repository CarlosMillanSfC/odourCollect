<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Access\AuthorizationException;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if(!Auth::check()) {
            $user = \App\Models\User::find($request->route('id'));

            if (!hash_equals((string) $request->route('hash'), sha1($user->getEmailForVerification()))) {
                throw new AuthorizationException;
            }

            if ($user->markEmailAsVerified())
                event(new Verified($user));

            return redirect()->intended(
                config('app.frontend_url').RouteServiceProvider::HOME
            );
        }

        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(
                config('app.frontend_url').RouteServiceProvider::HOME
            );
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect()->intended(
            config('app.frontend_url').RouteServiceProvider::HOME
        );
    }
}
