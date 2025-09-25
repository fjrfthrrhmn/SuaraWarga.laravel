<?php
// app/Models/PollOption.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class PollOption extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['poll_id', 'option_text'];
    public $timestamps = false;

    protected static function booted()
    {
        static::creating(function ($option) {
            $option->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function poll()  { return $this->belongsTo(Poll::class); }
    public function votes() { return $this->hasMany(Vote::class, 'option_id'); }
}
