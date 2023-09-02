<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed'],
        ]);
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;
        return response()->json(compact('user', 'token'));
    }
    public function login(Request $request)
    {
        $data = $request->validate([

            'email' => ['required'],
            'password' => ['required'],
        ]);
        if (!Auth::attempt($data)) {
            return response()->json('wrong username and password', 422);
        }
        $user = User::where('email', '=', $request->email)->first();
        $token = $user->createToken('main')->plainTextToken;
        return response()->json(compact('user', 'token'));
    }
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
