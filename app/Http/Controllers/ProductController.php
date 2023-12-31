<?php

namespace App\Http\Controllers;


use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

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
            'quantity' => ['required'],
        ]);
        if ($request->hasFile('image')) {
            $image = $request->image;
            $img_name = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('uploads/products'), $img_name);
            $last_name = 'uploads/products/' . $img_name;

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
                'quantity' => $request->quantity
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
                'quantity' => $request->quantity
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

            if (File::exists(public_path($product->image))) {
                unlink($product->image);
            }

            $image->move(public_path('uploads/products'), $img_name);
            $last_name = 'uploads/products/' . $img_name;

            $status = $request->status == true ? '1' : '0';
            $popular = $request->popular == true ? '1' : '0';
            $featured = $request->featured == true ? '1' : '0';
            $product->update([
                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
                'original_price' => $request->original_price,
                'selling_price' => $request->selling_price,
                'image' => $last_name,
                'brand' => $request->brand,
                'status' => $status,
                'popular' => $popular,
                'featured' => $featured,
                'category_id' => $request->category_id,
                'quantity' => $request->quantity
            ]);
            return response()->json([
                'message' => 'product updatd successfully with image', 200
            ]);
        } else {
            $status = $request->status == true ? '1' : '0';
            $popular = $request->popular == true ? '1' : '0';
            $featured = $request->featured == true ? '1' : '0';
            $product->update([
                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
                'original_price' => $request->original_price,
                'selling_price' => $request->selling_price,
                'category_id' => $request->category_id,
                'brand' => $request->brand,
                'status' => $status,
                'popular' => $popular,
                'featured' => $featured,
                'quantity' => $request->quantity
            ]);
            return response()->json([
                'message' => 'product updatd successfully without image', 200
            ]);
        }
    }
    public function delete(Product $product)
    {
        unlink($product->image);
        $product->delete();
        return response()->json([
            'message' => 'product deleted successfully'
        ]);
    }
}
