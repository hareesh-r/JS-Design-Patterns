// Base Song class
class Song {
    constructor(title, artist, duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration; // in seconds
    }

    play() {
        console.log(`Playing: ${this.title} by ${this.artist}`);
    }

    showDetails() {
        console.log(`Title: ${this.title}, Artist: ${this.artist}, Duration: ${this.duration}s`);
    }
}

// Adding a method to the prototype to convert duration to minutes and seconds
Song.prototype.getFormattedDuration = function () {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    return `${minutes}m ${seconds}s`;
};

// PremiumSong class that extends Song for special features
class PremiumSong extends Song {
    constructor(title, artist, duration, quality) {
        super(title, artist, duration);
        this.quality = quality; // Quality could be "High" for premium
    }

    // Overriding the play method for premium experience
    play() {
        console.log(`Playing premium quality ${this.quality}: ${this.title} by ${this.artist}`);
    }

    // Method to show premium details
    showPremiumDetails() {
        console.log(`This is a premium song with ${this.quality} quality!`);
    }
}

// Playlist class to manage a collection of songs
class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    // Add a song to the playlist
    addSong(song) {
        this.songs.push(song);
        console.log(`Added "${song.title}" to playlist "${this.name}"`);
    }

    // Play all songs in the playlist
    playAll() {
        console.log(`Playing playlist: ${this.name}`);
        this.songs.forEach(song => song.play());
    }
}

// Create some regular and premium songs
const song1 = new Song("Shape of You", "Ed Sheeran", 240);
const song2 = new Song("Mood", "24k Goldn", 200);
const premiumSong1 = new PremiumSong("Turn Back Time", "Daniel Schultz", 220, "High Quality");

// Regular songs can play and show details
song1.play(); // Playing: Shape of You by Ed Sheeran
song2.showDetails(); // Title: Blinding Lights, Artist: The Weeknd, Duration: 200s
console.log(song1.getFormattedDuration()); // 4m 0s

// Premium songs have special behavior
premiumSong1.play(); // Playing premium quality High Quality: Levitating by Dua Lipa
premiumSong1.showPremiumDetails(); // This is a premium song with High Quality quality!

// Create a playlist and add songs to it
const myPlaylist = new Playlist("Chill Vibes");
myPlaylist.addSong(song1);
myPlaylist.addSong(premiumSong1);

myPlaylist.playAll();  
