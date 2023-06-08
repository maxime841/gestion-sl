<?php

namespace Database\Seeders;

use App\Models\Club;
use App\Models\Picture;
use App\Models\Commentaire;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CommentaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {   $clubs = Club::all();
        foreach ($clubs as $club) {
            // create commentaire club
            $commentaires = Commentaire::factory()->count(3)->create();
            foreach($commentaires as $commentaire) {
                $pictureCommentaire = Picture::factory()->count(1)->create([
                    'favori' => true
                ]);
            $commentaire->pictures()->saveMany($pictureCommentaire);
            }
        $club->commentaires()->saveMany($commentaires);
        }  
    }   
}
