<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public readonly string $nome,
        public readonly string $empresa,
        public readonly string $email,
        public readonly string $projeto,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            replyTo: [$this->email],
            subject: "Novo contato via ALLKByte — {$this->nome}",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.contact',
        );
    }
}
