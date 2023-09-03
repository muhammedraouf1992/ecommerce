<?php

namespace App\Http\Controllers;


use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $data = Product::all();
        return response()->json([
            'data' => $data,
            'message' => 'all data'
        ]);
    }
    public function show($id)
    {
        $data = Product::find($id);
        return response()->json(['data' => $data, 'message' => 'single product']);
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required'],
            'slug' => ['required'],
            'description' => ['required'],
            'selling_price' => ['required'],
            'original_price' => ['required'],
            'brand' => ['required'],
            'category_id' => ['required'],
            'qty' => ['required'],
        ]);
        if ($request->hasFile('image')) {
            $image = $request->image;
            $img_name = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/products'), $img_name);
            $last_name = 'http://127.0.0.1:8000/uploads/products/' . $img_name;

            $status = $request->status ? '1' : '0';
            $popular = $request->popular ? '1' : '0';
            $featured = $request->featured ? '1' : '0';
            Product::create([
                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keyword,
                'original_price' => $request->original_price,
                'selling_price' => $request->selling_price,
                'image' => $last_name,
                'brand' => $request->brand,
                'status' => $status,
                'popular' => $popular,
                'featured' => $featured,
                'category_id' => $request->category_id,
                'quantity' => $request->qty
            ]);
            return response()->json([
                'message' => 'product added successfully with image', 200
            ]);
        } else {
            $status = $request->status ? '1' : '0';
            $popular = $request->popular ? '1' : '0';
            $featured = $request->featured ? '1' : '0';
            Product::create([
                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keyword,
                'original_price' => $request->original_price,
                'selling_price' => $request->selling_price,
                'category_id' => $request->category_id,
                'brand' => $request->brand,
                'status' => $status,
                'popular' => $popular,
                'featured' => $featured,
                'quantity' => $request->qty
            ]);
            return response()->json([
                'message' => 'product added successfully without image', 200
            ]);
        }
    }

    public function update(Request $request, Product $product)
    {

        if ($request->hasFile('image')) {
            $image = $request->image;
            $img_name = uniqid() . '.' . $image->getClientOriginalExtension();
            unlink($product->image);
            $image->move(public_path('uploads/products'), $img_name);
            $last_name = 'http://127.0.0.1:8000/uploads/products/' . $img_name;

            $status = $request->status ? '1' : '0';
            $popular = $request->popular ? '1' : '0';
            $featured = $request->featured ? '1' : '0';
            $product->update([
                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keyword,
                'original_price' => $request->original_price,
                'selling_price' => $request->selling_price,
                'image' => $last_name,
                'brand' => $request->brand,
                'status' => $status,
                'popular' => $popular,
                'featured' => $featured,
                'category_id' => $request->category_id,
                'quantity' => $request->qty
            ]);
            return response()->json([
                'message' => 'product added successfully with image', 200
            ]);
        } else {
            $status = $request->status ? '1' : '0';
            $popular = $request->popular ? '1' : '0';
            $featured = $request->featured ? '1' : '0';
            $product->update([
                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keyword,
                'original_price' => $request->original_price,
                'selling_price' => $request->selling_price,
                'category_id' => $request->category_id,
                'brand' => $request->brand,
                'status' => $status,
                'popular' => $popular,
                'featured' => $featured,
                'quantity' => $request->qty
            ]);
            return response()->json([
                'message' => 'product added successfully without image', 200
            ]);
        }
    }
}
