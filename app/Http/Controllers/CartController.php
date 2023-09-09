<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function add(Request $request)
    {
        $user_id = Auth::user()->id;
        if ($user_id) {
            $product_check = Product::where('id', $request->product_id)->first();
            if ($product_check) {
                if (Cart::where('product_id', $request->product_id)->where('user_id', $user_id)->exists()) {
                    return response()->json([
                        'message' => 'product already exists in cart'
                    ], 409);
                } else {
                    Cart::insert([
                        'product_id' => $request->product_id,
                        'user_id' => $user_id,
                        'product_quantity' => $request->product_quantity
                    ]);
                    return response()->json([
                        'message' => 'product successfully added to cart'
                    ], 200);
                }
            } else {
                return response()->json([
                    'message' => 'product doesnt exist'
                ], 404);
            }
        } else {
            return response()->json([
                'message' => 'login to add to cart'
            ], 401);
        }
    }


    public function index()
    {
        if (Auth::check()) {
            $user_id = Auth::user()->id;
            $cart_data = Cart::where('user_id', $user_id)->get();
            return response()->json([
                'data' => $cart_data,
                'message' => 'data fetched successfully'
            ], 200);
        } else {
            return response()->json([
                'message' => 'you have to login to view your cart'
            ], 401);
        }
    }
    public function update(Cart $cart, $scope)
    {
        $product_quantity = $cart->product_quantity;
        if ($scope == 'inc') {
            $cart->update([
                'product_quantity' => $product_quantity + 1,
            ]);
        } else if ($scope == 'dec') {
            $cart->update([
                'product_quantity' => $product_quantity - 1,
            ]);
        }
        return response()->json(['message' => 'quantity updated successfully'], 200);
    }
    public function delete(Cart $cart)
    {
        $cart->delete();
        return response()->json([
            'message' => 'item deleted successfully',

        ], 200);
    }
}
