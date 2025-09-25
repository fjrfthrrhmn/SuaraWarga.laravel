<?php


// routes/api.php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/posts', function () {
    return [
        ['id' => 1, 'title' => 'Post pertama'],
        ['id' => 2, 'title' => 'Post kedua'],
    ];
});

Route::get('/user', function (Request $request) {
    return $request->user(); // kalau sudah pakai sanctum/token
});
