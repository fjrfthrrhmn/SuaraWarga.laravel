<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        //! Users
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_user');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('role', ['warga', 'admin']);
            $table->bigInteger('nik')->unique();
            $table->string('no_telp', 20);
            $table->timestamps();
        });

        //! Laporan
        Schema::create('laporan', function (Blueprint $table) {
            $table->id('id_laporan');
            $table->foreignId('id_user')->constrained('users')->cascadeOnDelete();
            $table->string('judul_laporan');
            $table->string('kategori_laporan');
            $table->string('lokasi');
            $table->string('foto')->nullable();
            $table->text('deskripsi_laporan');
            $table->enum('status', ['pending', 'proses', 'selesai'])->default('pending');
            $table->timestamps();
        });

        //! Postingan
        Schema::create('postingan', function (Blueprint $table) {
            $table->id('id_postingan');
            $table->foreignId('id_user')->constrained('users')->cascadeOnDelete();
            $table->string('judul_postingan');
            $table->string('foto')->nullable();
            $table->text('deskripsi_postingan')->nullable();
            $table->timestamps();
        });

        //! Kegiatan
        Schema::create('kegiatan', function (Blueprint $table) {
            $table->id('id_kegiatan');
            $table->string('judul_kegiatan');
            $table->string('lokasi');
            $table->dateTime('tanggal');
            $table->text('deskripsi_kegiatan');
            $table->timestamps();
        });

        //! Voting
        Schema::create('voting', function (Blueprint $table) {
            $table->id('id_voting');
            $table->foreignId('id_user')->constrained('users')->cascadeOnDelete();
            $table->string('judul_voting');
            $table->enum('isi_voting', ['setuju', 'tidak_setuju']);
            $table->timestamps();
        });

        //! Komentar
        Schema::create('komentar', function (Blueprint $table) {
            $table->id('id_komentar');
            $table->foreignId('id_user')->constrained('users')->cascadeOnDelete();
            $table->foreignId('id_postingan')->constrained('postingan')->cascadeOnDelete();
            $table->text('pesan');
            $table->timestamps();
        });

        //! Kontak
        Schema::create('kontak', function (Blueprint $table) {
            $table->id('id_kontak');
            $table->string('nama_kontak');
            $table->string('no_telp', 20);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kontak');
        Schema::dropIfExists('komentar');
        Schema::dropIfExists('voting');
        Schema::dropIfExists('kegiatan');
        Schema::dropIfExists('postingan');
        Schema::dropIfExists('laporan');
        Schema::dropIfExists('users');
    }
};
