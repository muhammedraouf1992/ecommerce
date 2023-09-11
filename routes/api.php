<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/add-to-cart', [CartController::class, 'add']);
    Route::get('/cart', [CartController::class, 'index']);
    Route::post('/update-cart/{cart}/{scope}', [CartController::class, 'update']);
    Route::delete('/cart-delete/{cart}', [CartController::class, 'delete']);

    Route::post('/make-order', [OrderController::class, 'index']);
    Route::post('/validate-order', [OrderController::class, 'orderValidate']);
});
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/category', [CategoryController::class, 'index']);
Route::post('/category', [CategoryController::class, 'store']);
Route::put('/category/{category}', [CategoryController::class, 'update']);
Route::delete('/category/{category}', [CategoryController::class, 'delete']);
Route::get('/category/{id}', [CategoryController::class, 'show']);
Route::get('/visible', [CategoryController::class, 'visible']);


Route::get('/product', [ProductController::class, 'index']);
Route::post('/product', [ProductController::class, 'store']);
Route::post('/product/{product}', [ProductController::class, 'update']);
Route::delete('/product/{product}', [ProductController::class, 'delete']);
Route::get('/product/{id}', [ProductController::class, 'show']);

Route::get('/orders', [OrderController::class, 'getOrders']);
Route::get('/orderItems/{orderItem}', [OrderController::class, 'getOrderItems']);
