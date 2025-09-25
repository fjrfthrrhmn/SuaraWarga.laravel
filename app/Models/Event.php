<?php
// app/Models/Event.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Event extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['title', 'description', 'start_time', 'end_time', 'location', 'created_by'];
    public $timestamps = false;

    protected static function booted()
    {
        static::creating(function ($event) {
            $event->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function user() { return $this->belongsTo(User::class, 'created_by'); }
}
