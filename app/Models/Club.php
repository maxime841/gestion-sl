<?php

namespace App\Models;

use App\Models\Dj;
use App\Models\Host;
use App\Models\Party;
use App\Models\Dancer;
use App\Models\Picture;
use App\Models\Commentaire;
use App\Traits\CommentableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Club extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'owner',
        'presentation',
        'description',
        'picture',
        ];


        public function djs()
        {
            return $this->belongsToMany(Dj::class);
        }

        public function hosts()
        {
            return $this->belongsToMany(Host::class);
        }

        public function dancers()
        {
            return $this->belongsToMany(Dancer::class);
        }

        public function parties()
        {
            return $this->belongsToMany(Party::class);
        }

        public function pictures()
        {
        return $this->morphMany(Picture::class, 'pictureable');
        }

        public function commentaires(): MorphMany
        {
            return $this->morphMany(Commentaire::class, 'commentable')->latest();
        }
    
        public function user()
        {
            return $this->belongsTo(User::class);
        }
}
