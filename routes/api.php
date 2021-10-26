<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::domain(env('API_HOST'))->group(function () {
    Route::prefix('v1')->group(function () {
        /**
         * Admin
         */
        Route::prefix('admin')->group(function () {
            Route::post('login', [LoginController::class, 'adminLogin']);
        });
        /**
         * User
         */
        Route::prefix('user')->group(function () {
            Route::middleware('auth_jwt')->get('/', [UserController::class, 'getUserDetails']);
        });
        /**
         * Blog
         */
        Route::prefix('blog')->group(function () {
            Route::get('getRecent', [BlogController::class, 'getRecent']);
            Route::get('getById', [BlogController::class, 'getById']);
            Route::middleware('admin_auth_jwt')
                ->post('create', [BlogController::class, 'create']);
            Route::middleware('admin_auth_jwt')
                ->get('getAll', [BlogController::class, 'getAllWithDetails']);
            Route::middleware('admin_auth_jwt')
                ->put('edit', [BlogController::class, 'edit']);
            Route::middleware('admin_auth_jwt')
                ->delete('delete', [BlogController::class, 'delete']);
        });
    });
});
