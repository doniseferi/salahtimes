interface Salah {
    name:
    Readonly<"fajr"> |
    Readonly<"dhuhr"> |
    Readonly<"asr"> |
    Readonly<"maghrib"> |
    Readonly<"isha">
    time: Readonly<Date>
}