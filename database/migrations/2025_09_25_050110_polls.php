<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// 2025_09_25_000003_create_polls_table.php
return new class extends Migration {
    public function up(): void {
        Schema::create('polls', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('description')->nullable();
            $table->uuid('created_by');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('closed_at')->nullable();

            $table->foreign('created_by')->references('id')->on('users')->cascadeOnDelete();
        });
    }
    public function down(): void {
        Schema::dropIfExists('polls');
    }
};
