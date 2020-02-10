export {};

declare global {
    interface Date {
        add(timeSpan: TimeSpan): Date;
        subtract(timeSpan: TimeSpan): Date
    }
}