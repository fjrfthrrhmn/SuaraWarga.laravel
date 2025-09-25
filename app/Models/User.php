<?php
// app/Models/User.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['name', 'email', 'password_hash', 'role'];

    protected static function booted()
    {
        static::creating(function ($user) {
            $user->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function posts()     { return $this->hasMany(Post::class); }
    public function comments()  { return $this->hasMany(Comment::class); }
    public function reports()   { return $this->hasMany(Report::class); }
    public function events()    { return $this->hasMany(Event::class, 'created_by'); }
    public function polls()     { return $this->hasMany(Poll::class, 'created_by'); }
    public function votes()     { return $this->hasMany(Vote::class); }
}
