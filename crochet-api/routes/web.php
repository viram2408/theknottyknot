<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminMiddleware;

Route::get('/', function () {
    return view('welcome');
});

// Route::prefix('api')->group(function () {
//     Route::apiResource('products', ProductController::class);
//     Route::apiResource('categories', CategoryController::class);
//     Route::apiResource('orders', OrderController::class);
// });

// Route::get('/products', function () {
//     $response = Route::get('http://127.0.0.1:8001/api/products');
//     return $response->json();
// });

Route::resource('products', ProductController::class);
Route::resource('categories', CategoryController::class);
Route::resource('orders', OrderController::class);



Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);   // Add new
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::put('/products/{id}', [ProductController::class, 'update']); // Edit
Route::delete('/products/{id}', [ProductController::class, 'destroy']); // Delete


Route::middleware(['auth:sanctum', AdminMiddleware::class])->group(function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/me', [AuthController::class, 'me']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

// Route::middleware(['auth:sanctum', 'admin'])->group(function () {
//     Route::get('/admin/dashboard', function () {
//         return response()->json(['message' => 'Welcome Admin']);
//     });
// });