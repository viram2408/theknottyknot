<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller {
    public function index(){ return Order::latest()->get(); }
    public function show(Order $order){ return $order; }
    public function store(Request $request){
        $data = $request->validate([
            'customer_name'=>'required',
            'customer_email'=>'required|email',
            'items'=>'required|array',
            'total'=>'required|numeric'
        ]);
        return Order::create($data);
    }
    public function update(Request $request, Order $order){
        $data = $request->validate(['status'=>'required|string']);
        $order->update($data);
        return $order;
    }
}
