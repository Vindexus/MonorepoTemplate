export function getRandomInt (min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomItem<T> (items: T[]): T {
	return items[getRandomInt(0, items.length - 1)]!
}
