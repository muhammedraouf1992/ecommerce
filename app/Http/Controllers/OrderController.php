<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'state' => 'required',
            'city' => 'required',
            'zip_code' => 'required',
        ]);
        $user_id = Auth::user()->id;
        $order = Order::create([
            'user_id' => $user_id,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'state' => $request->state,
            'city' => $request->city,
            'zip_code' => $request->zip_code,
            'payment_method' => $request->payment_method,
            'payment_id' => $request->payment_id,
            'tracking_number' => 'ecom' . uniqid(),
        ]);
        $cartItems = Cart::where('user_id', $user_id)->get();
        $order_items = [];
        foreach ($cartItems as $item) {
            $order_items[] = [
                'product_id' => $item->product_id,
                'product_price' => $item->product->selling_price,
                'product_quantity' => $item->product_quantity,
            ];
            $item->product->update([
                'quantity' => $item->product->quantity - $item->product_quantity
            ]);
        };
        $order->orderItem()->createMany($order_items);
        Cart::destroy($cartItems);
        return response()->json([
            'message' => 'order placed successfully'
        ], 200);
    }
    public function orderValidate(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'state' => 'required',
            'city' => 'required',
            'zip_code' => 'required',
        ]);
        return response()->json(['message' => 'data validated successfully'], 200);
    }


    public function getOrders()
    {
        $data = Order::all();
        return response()->json([
            'message' => 'success',
            'data' => $data
        ], 200);
    }
    public function getOrderItems($id)
    {
        $orderItem = OrderItem::where('order_id', '=', $id)->get();
        return response()->json([
            'message' => 'success',
            'data' => $orderItem
        ], 200);
    }
    public function updateOrder(Order $order, Request $request)
    {
        $order->update(['status' => $request->status]);
        return response()->json(['message' => 'order updated successfully']);
    }
    public function deleteOrder(Order $order)
    {
        $order->delete();
        return response()->json(['message' => 'order deleted successfully']);
    }
}
