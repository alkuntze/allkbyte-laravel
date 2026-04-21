<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/contato', [ContactController::class, 'send']);

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
