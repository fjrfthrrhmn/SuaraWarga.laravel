<?php
// app/Models/Comment.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Comment extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['post_id', 'user_id', 'content'];
    public $timestamps = false; // hanya pakai created_at

    protected static function booted()
    {
        static::creating(function ($comment) {
            $comment->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function post()  { return $this->belongsTo(Post::class); }
    public function user()  { return $this->belongsTo(User::class); }
}
