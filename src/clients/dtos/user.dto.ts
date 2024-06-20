export class UserDto {
  constructor(props: { handle: string; tier: number; rating: number }) {
    this.handle = props.handle;
    this.tier = props.tier;
    this.rating = props.rating;
  }

  handle: string;
  tier: number;
  rating: number;

  get tierName(): string {
    if (this.tier === 0) return 'Unrated';

    const tierNames = [
      'Bronze',
      'Silver',
      'Gold',
      'Platinum',
      'Diamond',
      'Ruby',
      'Master',
    ];

    return `${tierNames[Math.floor(this.tier / 6)]} ${5 - (this.tier % 6)}`;
  }
}
