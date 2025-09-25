<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// 2025_09_25_000005_create_votes_table.php
return new class extends Migration {
    public function up(): void {
        Schema::create('votes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('poll_id');
            $table->uuid('option_id');
            $table->uuid('user_id');
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('poll_id')->references('id')->on('polls')->cascadeOnDelete();
            $table->foreign('option_id')->references('id')->on('poll_options')->cascadeOnDelete();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();

            $table->unique(['poll_id', 'user_id']); // 1 user hanya bisa 1 vote per poll
        });
    }
    public function down(): void {
        Schema::dropIfExists('votes');
    }
};
