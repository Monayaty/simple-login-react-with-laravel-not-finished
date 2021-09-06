<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function Login(Request $request)
    {
        $request -> validate([
            'email'     => 'required|email',
            'password'  => 'required'
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user){
            return redirect()->route('login')->with(['error'=>'email is wrong']) ;
        }
        if(Hash::check($request->password, $user->password) === false){
            return redirect()->route('login')->with(['error'=>'password is wrong']) ;
        }
        return redirect()->route('home');
    }
}
