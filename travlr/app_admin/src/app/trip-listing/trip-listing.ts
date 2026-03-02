import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadTrips();
  }

  addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private loadTrips(): void {
    this.message = 'Loading trips...';

    this.tripDataService.getTrips().subscribe({
      next: (value) => {
        console.log('API returned:', value);
        this.trips = value ?? [];
        this.message = `There are ${this.trips.length} trips available.`;

  
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.message = 'ERROR loading trips';
        this.trips = [];
        this.cdr.detectChanges();
      }
    });
  }
}
