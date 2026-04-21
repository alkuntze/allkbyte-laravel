<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request): JsonResponse
    {
        $data = $request->validate([
            'nome'    => 'required|string|max:100',
            'empresa' => 'nullable|string|max:100',
            'email'   => 'required|email|max:150',
            'projeto' => 'required|string|max:2000',
        ]);

        Mail::to(config('mail.contact_to'))->send(new ContactMessage(
            nome:    $data['nome'],
            empresa: $data['empresa'] ?? '',
            email:   $data['email'],
            projeto: $data['projeto'],
        ));

        return response()->json(['message' => 'Mensagem enviada com sucesso.']);
    }
}
