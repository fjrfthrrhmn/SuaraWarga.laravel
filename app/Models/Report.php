<?php
// app/Models/Report.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Report extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = ['user_id', 'title', 'description', 'status', 'location', 'category_report', 'image_path'];

    protected static function booted()
    {
        static::creating(function ($report) {
            $report->id = (string) Str::uuid();
        });
    }

    // 🔗 Relations
    public function user() { return $this->belongsTo(User::class); }
}
