import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.sass']
})
export class ScenesComponent implements OnInit {
  galleryImages:any =  [];

  constructor(private _lightbox: Lightbox) {
    this.galleryImages = [
      {
        src: 'assets/scenes/4k-aquarium.jpeg',
        thumb: 'assets/scenes/4k-aquarium.jpeg'
      },
      {
        src: 'assets/scenes/4k-fishes-tv-wallpaper.jpeg',
        thumb: 'assets/scenes/4k-fishes-tv-wallpaper.jpeg'
      },
      {
        src: 'assets/scenes/4k-underwater-cave-video.jpeg',
        thumb: 'assets/scenes/4k-underwater-cave-video.jpeg'
      },
      {
        src: 'assets/scenes/4k-zen-video-fish-tank.jpeg',
        thumb: 'assets/scenes/4k-zen-video-fish-tank.jpeg'
      },
      {
        src: 'assets/scenes/aquarium-video-for-the-freame-tv.jpg',
        thumb: 'assets/scenes/aquarium-video-for-the-freame-tv.jpg'
      },
      {
        src: 'assets/scenes/blue-aquarium-UHD-big-fish.jpeg',
        thumb: 'assets/scenes/blue-aquarium-UHD-big-fish.jpeg'
      },
      {
        src: 'assets/scenes/eels-aquarium-video-in-4k.jpeg',
        thumb: 'assets/scenes/eels-aquarium-video-in-4k.jpeg'
      },
      {
        src: 'assets/scenes/finding-dory-aquarium-video-for-children.jpg',
        thumb: 'assets/scenes/finding-dory-aquarium-video-for-children.jpg'
      },
      {
        src: 'assets/scenes/marine-aquarium-screensaver.jpg',
        thumb: 'assets/scenes/marine-aquarium-screensaver.jpg'
      },
      {
        src: 'assets/scenes/relaxing-jellyfish-video.jpg',
        thumb: 'assets/scenes/relaxing-jellyfish-video.jpg'
      },
      {
        src: 'assets/scenes/seahorses-screensaver-video.jpg',
        thumb: 'assets/scenes/seahorses-screensaver-video.jpg'
      },
      {
        src: 'assets/scenes/virtual-aquarium-4K.jpg',
        thumb: 'assets/scenes/virtual-aquarium-4K.jpg'
      },
    ];

   }

  ngOnInit() {
  
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.galleryImages, index, {centerVertically: true});
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
