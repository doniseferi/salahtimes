export {};

declare global {
  interface Date {
    add(timeSpan: TimeSpan): Date;
    subtract(timeSpan: TimeSpan): Date;
  }
}

declare interface Date {
  add(timeSpan: TimeSpan): Date;
  subtract(timeSpan: TimeSpan): Date;
}

