<?php
// app/Models/Vote.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Vote extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['poll_id', 'option_id', 'user_id'];
    public $timestamps = false; // hanya created_at

    protected static function booted()
    {
        static::creating(function ($vote) {
            $vote->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function poll()   { return $this->belongsTo(Poll::class); }
    public function option() { return $this->belongsTo(PollOption::class, 'option_id'); }
    public function user()   { return $this->belongsTo(User::class); }
}
