<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/posts', function () {
    return [
        ['id' => 1, 'title' => 'Post pertama'],
        ['id' => 2, 'title' => 'Post kedua'],
    ];
});


Route::get('/users', [UserController::class, 'index']);