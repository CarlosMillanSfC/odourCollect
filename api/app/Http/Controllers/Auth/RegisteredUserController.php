<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\{ User, ProfileCitizen, ProfileClient};
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\{ Request, Response };
use Illuminate\Support\Facades\{ Auth, Hash };
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Support\Facades\DB;


class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'min:3','max:100'],
            'birth_year' => ['required', 'string'], // Se puede poner una lógica de mínimo de edad, máximo, etc
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class.',email'],
            'gender' => ['required', new Enum(\App\Enums\Citizen\Gender::class)],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);


        DB::transaction(function () use ($request) {
            $citizen = ProfileCitizen::create([
                'name' => $request->name,
                'gender' => $request->gender,
                'birth_year' => $request->birth_year,
            ]);

            $user = $citizen->user()->create([
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            event(new Registered($user));

            Auth::login($user);
        });

        return response()->noContent();

    }
}
