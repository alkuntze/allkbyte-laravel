<x-mail::message>
# Novo contato pelo site ALLKByte

**Nome:** {{ $nome }}

**Empresa:** {{ $empresa ?: '—' }}

**E-mail para resposta:** {{ $email }}

---

**Sobre o projeto:**

{{ $projeto }}

---

*Mensagem enviada via formulário em allkbyte.com.br*
</x-mail::message>
