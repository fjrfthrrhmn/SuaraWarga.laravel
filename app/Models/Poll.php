<?php
// app/Models/Poll.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Poll extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['title', 'description', 'created_by', 'closed_at'];
    public $timestamps = false; // pakai created_at manual

    protected static function booted()
    {
        static::creating(function ($poll) {
            $poll->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function options() { return $this->hasMany(PollOption::class); }
    public function votes()   { return $this->hasMany(Vote::class); }
    public function user()    { return $this->belongsTo(User::class, 'created_by'); }
}
