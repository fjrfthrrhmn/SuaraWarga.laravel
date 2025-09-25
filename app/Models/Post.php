<?php
// app/Models/Post.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['user_id', 'title', 'content', 'type', 'image_path'];

    protected static function booted()
    {
        static::creating(function ($post) {
            $post->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function user()      { return $this->belongsTo(User::class); }
    public function comments()  { return $this->hasMany(Comment::class); }
}
