<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// 2025_09_25_000004_create_poll_options_table.php
return new class extends Migration {
    public function up(): void {
        Schema::create('poll_options', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('poll_id');
            $table->string('option_text');

            $table->foreign('poll_id')->references('id')->on('polls')->cascadeOnDelete();
        });
    }
    public function down(): void {
        Schema::dropIfExists('poll_options');
    }
};
